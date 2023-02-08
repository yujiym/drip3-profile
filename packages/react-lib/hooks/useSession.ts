import { useMemo } from 'react'
import { useAtom } from 'jotai'
import { useResetAtom } from 'jotai/utils'
import { sessionAtom } from '@drip3/react-lib/atoms'
import { shortAddress } from '@drip3/lib/utils'
import { connect, disconnect } from '@drip3/lib/orbis'

export default function useSession() {
  const [session, setSession] = useAtom(sessionAtom)
  const resetSession = useResetAtom(sessionAtom)

  const did = useMemo(() => session.did, [session.did])

  const isConnected = useMemo(() => !!session.did, [session.did])

  const ensName = useMemo(
    () => session?.details?.metadata?.ensName ?? '',
    [session.details]
  )

  const displayName = useMemo(
    () =>
      session?.details?.metadata?.ensName ??
      shortAddress(session?.details?.metadata?.address) ??
      '',
    [session.details]
  )

  const description = useMemo(
    () => session?.details?.profile?.description ?? '',
    [session.details]
  )

  const handleConnect = async (): Promise<void> => {
    if (isConnected) {
      console.log('--already signedin')
    } else {
      const res = await connect()
      setSession({ ...session, did: res.did, details: res.details })
      console.log('--signin', res, did)
    }
  }

  const handleDisconnect = async (): Promise<void> => {
    await disconnect()
    resetSession()
    console.log('--signout')
  }

  return {
    handleConnect,
    handleDisconnect,
    did,
    ensName,
    isConnected,
    displayName,
    description,
  }
}
