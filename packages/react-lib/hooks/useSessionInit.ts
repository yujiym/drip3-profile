'use client'
import { useEffect } from 'react'
import { getIsConnected } from '@drip3/lib/orbis'
import { useAtom, useSetAtom } from 'jotai'
import { sessionAtom, sessionLoadedAtom } from '@drip3/react-lib/atoms'

export default function useSessionInit() {
  const [session, setSession] = useAtom(sessionAtom)
  const setLoaded = useSetAtom(sessionLoadedAtom)

  useEffect(() => {
    ;(async () => {
      setLoaded(false)
      const res = await getIsConnected()
      if (res.status === 200 && !session.did) {
        console.log('0', session)
        setSession({
          ...session,
          did: res.did,
          details: res.details,
        })
        console.log('1', session, res)
      }
      setLoaded(true)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
