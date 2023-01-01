// 'use client'
import { useEffect } from 'react'
import { Orbis } from '@orbisclub/orbis-sdk'
import { useStore } from '../store'

export let orbis = new Orbis()

export default function useSession() {
  const store = useStore()

  useEffect(() => {
    ;(async () => {
      const res = await orbis.isConnected()
      store.setSession({ did: res.did, details: res.details })
      console.log('--setSession', res.did, res.details)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleConnect = async (): Promise<void> => {
    let res = await orbis.connect_v2({
      chain: 'ethereum',
      lit: true
    })
    store.setSession({ did: res.did, details: res.details })
    console.log('--signin')
  }

  const handleDisconnect = async (): Promise<void> => {
    await orbis.logout()
    store.setSession({ did: '', details: '' })
    console.log('--signout')
  }

  return { handleConnect, handleDisconnect }
}
