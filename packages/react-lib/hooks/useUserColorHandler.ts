'use client'
import { useEffect } from 'react'
import { useIsMounted } from 'usehooks-ts'

export default function UserPageColorHandler(color: string) {
  const isMounted = useIsMounted()

  useEffect(() => {
    if (isMounted())
      document.documentElement.style.setProperty(
        '--c-primary',
        `var(--c-${color})`
      )
  }, [color, isMounted])
}
