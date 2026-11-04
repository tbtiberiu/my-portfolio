export default function observeBuilds(root: HTMLElement) {
  if (!('IntersectionObserver' in window)) return

  const built = new Set<string>()
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const group = entry.target as HTMLElement
        if (group.dataset.buildState !== 'pending') continue
        if (entry.isIntersecting || entry.boundingClientRect.bottom <= 0) {
          reveal(group, entry.isIntersecting)
        }
      }
    },
    { rootMargin: '0px 0px -32px 0px' },
  )

  function reveal(group: HTMLElement, animate = false) {
    built.add(group.dataset.build ?? '')
    group.dataset.buildState = animate ? 'revealing' : 'complete'
    observer.unobserve(group)
  }

  const register = () => {
    for (const group of root.querySelectorAll<HTMLElement>(
      '[data-build]:not([data-build-state])',
    )) {
      if (reducedMotion.matches || built.has(group.dataset.build ?? '')) {
        reveal(group)
        continue
      }

      group
        .querySelectorAll<HTMLElement>('[data-build-item]')
        .forEach((item, index) => {
          item.style.setProperty('--build-order', String(index))
        })
      group.dataset.buildState = 'pending'
      observer.observe(group)
    }
  }

  const onMotionChange = () => {
    if (reducedMotion.matches) {
      root.querySelectorAll<HTMLElement>('[data-build]').forEach((group) => {
        reveal(group)
      })
    }
  }

  const onFocus = (event: FocusEvent) => {
    if (!(event.target instanceof HTMLElement)) return
    const group = event.target.closest<HTMLElement>('[data-build]')
    if (group) reveal(group)
  }

  register()
  // Filters remount cards; stable IDs keep previously built projects visible.
  const mutations = new MutationObserver(register)
  mutations.observe(root, { childList: true, subtree: true })
  reducedMotion.addEventListener('change', onMotionChange)
  root.addEventListener('focusin', onFocus)

  return () => {
    observer.disconnect()
    mutations.disconnect()
    reducedMotion.removeEventListener('change', onMotionChange)
    root.removeEventListener('focusin', onFocus)
    root.querySelectorAll<HTMLElement>('[data-build]').forEach((group) => {
      delete group.dataset.buildState
    })
    root.querySelectorAll<HTMLElement>('[data-build-item]').forEach((item) => {
      item.style.removeProperty('--build-order')
    })
  }
}
