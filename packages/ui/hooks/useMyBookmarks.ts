import { useEffect } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { orbis } from 'ui/hooks/useInitialSession'
import useSession from 'ui/hooks/useSession'
import { loadingAtom, postsAtom, postsCountAtom } from 'ui/atoms'

export default function useMyBookmarks() {
  const { did } = useSession()
  const [loading, setLoading] = useAtom(loadingAtom)
  const [posts, setPosts] = useAtom(postsAtom)
  const count = useAtomValue(postsCountAtom)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      let { data, error } = await orbis.getPosts({
        context: 'drip3.xyz_1672554656',
        did
      })
      setPosts(data)
      setLoading(false)
      console.log('--getPosts', data, error)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    loading,
    data: posts,
    count: count ?? 0
  }
}
