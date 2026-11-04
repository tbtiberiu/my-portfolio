export default function BuildFrame({ button = false }: { button?: boolean }) {
  return (
    <span
      aria-hidden='true'
      className={button ? 'build-frame build-button-frame' : 'build-frame'}
    >
      <svg aria-hidden='true' focusable='false'>
        <rect
          width='100%'
          height='100%'
          rx={button ? '0' : '12'}
          pathLength='1'
          vectorEffect='non-scaling-stroke'
        />
      </svg>
      {button && (
        <>
          <span />
          <span />
          <span />
          <span />
        </>
      )}
    </span>
  )
}
