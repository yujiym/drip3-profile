// 'use client'
import { useEffect } from 'react'
import { Orbis } from '@orbisclub/orbis-sdk'
import { useAtom, useSetAtom } from 'jotai'
import { sessionAtom, sessionLoadedAtom } from 'ui/atoms'

export let orbis = new Orbis()

export default function useInitialSession() {
  const [session, setSession] = useAtom(sessionAtom)
  const setLoaded = useSetAtom(sessionLoadedAtom)

  useEffect(() => {
    ;(async () => {
      setLoaded(false)
      const res = await orbis.isConnected()
      if (res && !session.did) {
        setSession({ did: res.did, details: res.details })
        console.log(res)
      }
      setLoaded(true)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
