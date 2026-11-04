export default function observeBuilds(root: HTMLElement) {
  if (!('IntersectionObserver' in window)) return

  const built = new Set<string>()
  const queue = new Set<HTMLElement>()
  let timer: ReturnType<typeof setTimeout> | undefined
  let batchSize = 4
  let entrance = 0
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const group = entry.target
        if (!(group instanceof HTMLElement)) continue
        if (group.dataset.buildState !== 'pending') continue
        if (entry.boundingClientRect.bottom <= 0) {
          reveal(group)
        } else if (entry.isIntersecting) {
          queue.add(group)
          timer ??= setTimeout(revealNext, 0)
        } else {
          queue.delete(group)
        }
      }
    },
    { rootMargin: '0px 0px -32px 0px' },
  )

  function reveal(group: HTMLElement, animate = false) {
    queue.delete(group)
    built.add(group.dataset.build ?? '')
    group.dataset.buildState = animate ? 'revealing' : 'complete'
    observer.unobserve(group)
  }

  function revealNext() {
    timer = undefined
    let count = 0
    for (const group of queue) {
      queue.delete(group)
      if (!group.isConnected) {
        observer.unobserve(group)
        continue
      }
      reveal(group, true)
      if (++count === batchSize) break
    }
    if (count > 0) {
      batchSize = batchSize === 4 ? 5 : 4
      timer = setTimeout(revealNext, 350)
    }
  }

  const register = () => {
    for (const group of root.querySelectorAll<HTMLElement>(
      '[data-build]:not([data-build-state])',
    )) {
      if (reducedMotion.matches || built.has(group.dataset.build ?? '')) {
        reveal(group)
        continue
      }

      const index = entrance++
      const scales = [1, 0.96, 1.04, 1, 0.98, 1.02, 0.72, 1.22]
      group.style.setProperty(
        '--build-scale',
        String(scales[index % scales.length]),
      )
      group.style.setProperty('--build-distance', index % 4 === 2 ? '4' : '1')
      if (!group.dataset.buildEnter) {
        group.style.setProperty('--build-x', `${index % 2 === 0 ? -24 : 24}px`)
        group.style.setProperty('--build-y', `${index % 3 === 0 ? -18 : 18}px`)
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
      clearTimeout(timer)
      timer = undefined
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

  const onAnimationEnd = (event: AnimationEvent) => {
    if (
      event.animationName === 'build-button-box' &&
      event.target instanceof HTMLElement &&
      event.target.dataset.buildState === 'revealing'
    ) {
      reveal(event.target)
    }
  }

  register()
  // Filters remount cards; stable IDs keep previously built projects visible.
  const mutations = new MutationObserver(register)
  mutations.observe(root, { childList: true, subtree: true })
  reducedMotion.addEventListener('change', onMotionChange)
  root.addEventListener('focusin', onFocus)
  root.addEventListener('animationend', onAnimationEnd)

  return () => {
    clearTimeout(timer)
    queue.clear()
    observer.disconnect()
    mutations.disconnect()
    reducedMotion.removeEventListener('change', onMotionChange)
    root.removeEventListener('focusin', onFocus)
    root.removeEventListener('animationend', onAnimationEnd)
    root.querySelectorAll<HTMLElement>('[data-build]').forEach((group) => {
      delete group.dataset.buildState
      for (const property of [
        '--build-scale',
        '--build-distance',
        '--build-x',
        '--build-y',
      ]) {
        group.style.removeProperty(property)
      }
    })
    root.querySelectorAll<HTMLElement>('[data-build-item]').forEach((item) => {
      item.style.removeProperty('--build-order')
    })
  }
}
