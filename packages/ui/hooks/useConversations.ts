import { useEffect } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { orbis } from 'ui/hooks/useInitialSession'
import useSession from 'ui/hooks/useSession'
import { loadingAtom, conversationsAtom, conversationsCountAtom } from 'ui/atoms'

export default function useConversations() {
  const { did } = useSession()
  const [loading, setLoading] = useAtom(loadingAtom)
  const [conversations, setConversations] = useAtom(conversationsAtom)
  const count = useAtomValue(conversationsCountAtom)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      let { data, error } = await orbis.getConversations({
        did
      })
      setConversations(data)
      setLoading(false)
      console.log('--getConversations', data, error)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    loading,
    data: conversations,
    count: count ?? 0
  }
}
