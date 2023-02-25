import { useEffect } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { getUserConversations } from '@drip3/lib/orbis'
import { loadingAtom, conversationsAtom } from '@drip3/react-lib/atoms'

export default function useGetUserConversations(did: string | undefined) {
  const [loading, setLoading] = useAtom(loadingAtom)
  const [conversations, setConversations] = useAtom(conversationsAtom)

  useEffect(() => {
    async function getConversations(did: string) {
      setLoading(true)
      const { data, error } = await getUserConversations(did)
      setConversations(data)
      setLoading(false)
      console.log('--getUserConversations', data)
    }
    if (!!did) getConversations(did)
  }, [did])

  return {
    loading,
    data: conversations,
  }
}
