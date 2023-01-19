import { useMemo } from 'react'
import { useAtom } from 'jotai'
import { useResetAtom } from 'jotai/utils'
import { orbis } from 'ui/hooks/useInitialSession'
import { sessionAtom } from 'ui/atoms'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { shortAddress } from 'lib/utils'

//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  infuraId: '93f86b75158a4fd784b8ea854c08b7d6'
})

export default function useSession() {
  const [session, setSession] = useAtom(sessionAtom)
  const resetSession = useResetAtom(sessionAtom)

  const did = useMemo(() => session.did, [session.did])

  const isConnected = useMemo(() => !!session.did, [session.did])

  const displayName = useMemo(
    () =>
      session?.details?.profile?.username ??
      session?.details?.metadata?.ensName ??
      shortAddress(session?.details?.metadata?.address) ??
      '',
    [session.details]
  )

  const description = useMemo(() => session?.details?.profile?.description ?? '', [session.details])

  const handleConnect = async (): Promise<void> => {
    if (isConnected) {
      console.log('--already signedin')
    } else {
      let res = await orbis.connect_v2({
        provider,
        chain: 'ethereum',
        lit: true
      })
      setSession({ did: res.did, details: res.details })
    }
  }

  const handleDisconnect = async (): Promise<void> => {
    await orbis.logout()
    resetSession()
    console.log('--signout')
  }

  return { handleConnect, handleDisconnect, did, isConnected, displayName, description }
}
