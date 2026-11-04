export default function BuildFrame() {
  return (
    <span aria-hidden='true' className='build-frame'>
      <svg aria-hidden='true' focusable='false'>
        <rect
          width='100%'
          height='100%'
          rx='12'
          pathLength='1'
          vectorEffect='non-scaling-stroke'
        />
      </svg>
    </span>
  )
}
