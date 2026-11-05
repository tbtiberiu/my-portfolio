export default function BuildFrame({ button = false }: { button?: boolean }) {
  return (
    <span
      aria-hidden='true'
      className={button ? 'build-frame build-button-frame' : 'build-frame'}
    >
      {button && (
        <>
          <svg aria-hidden='true' focusable='false'>
            <rect
              width='100%'
              height='100%'
              vectorEffect='non-scaling-stroke'
            />
          </svg>
          <span />
          <span />
          <span />
          <span />
        </>
      )}
    </span>
  )
}
