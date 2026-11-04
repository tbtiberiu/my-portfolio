'use client'

import { type ReactNode, useEffect, useRef } from 'react'
import observeBuilds from './observe-builds'

export default function ScrollBuild({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (rootRef.current) return observeBuilds(rootRef.current)
  }, [])

  return (
    <main ref={rootRef} className='relative overflow-x-clip'>
      {children}
    </main>
  )
}
