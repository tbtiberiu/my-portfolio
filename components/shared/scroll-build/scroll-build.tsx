'use client'

import { type ReactNode, useEffect, useRef } from 'react'
import observeBuilds from './observe-builds'

export default function ScrollBuild({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (rootRef.current) return observeBuilds(rootRef.current)
  }, [])

  return (
    <div ref={rootRef} className='contents'>
      {children}
    </div>
  )
}
