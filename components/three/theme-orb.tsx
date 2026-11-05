import { useId } from 'react'

export default function ThemeOrb() {
  const id = useId()

  return (
    <div className='theme-orb' aria-hidden='true'>
      <svg
        className='theme-orb-scene'
        viewBox='0 0 640 640'
        fill='none'
        aria-hidden='true'
        focusable='false'
      >
        <defs>
          <radialGradient id={`${id}-surface`} cx='30%' cy='25%' r='80%'>
            <stop className='theme-orb-highlight' />
            <stop offset='.5' className='theme-orb-midtone' />
            <stop offset='1' className='theme-orb-shadow' />
          </radialGradient>
          <mask id={`${id}-phase`} maskUnits='userSpaceOnUse'>
            <rect width='640' height='640' fill='white' />
            <circle
              className='theme-orb-cutout'
              cx='410'
              cy='225'
              r='210'
              fill='black'
            />
          </mask>
        </defs>
        <g className='theme-orb-rays' stroke='currentColor' strokeWidth='2'>
          <circle cx='320' cy='320' r='241' strokeOpacity='.2' />
          <path
            d='M320 48v35 M456 84l-18 31 M556 184l-31 18 M592 320h-35 M556 456l-31-18 M456 556l-18-31 M320 592v-35 M184 556l18-31 M84 456l31-18 M48 320h35 M84 184l31 18 M184 84l18 31'
            strokeLinecap='round'
          />
        </g>
        <g mask={`url(#${id}-phase)`}>
          <circle cx='320' cy='320' r='208' fill={`url(#${id}-surface)`} />
          <circle
            cx='320'
            cy='320'
            r='207'
            stroke='white'
            strokeOpacity='.12'
          />
          <g className='theme-orb-craters' fill='#0f4fab'>
            <circle cx='180' cy='360' r='22' />
            <circle cx='225' cy='430' r='12' />
            <circle cx='290' cy='478' r='17' />
          </g>
        </g>
        <path
          className='theme-orb-stars'
          d='M115 205v14 M108 212h14 M164 463v10 M159 468h10 M425 535v14 M418 542h14'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </div>
  )
}
