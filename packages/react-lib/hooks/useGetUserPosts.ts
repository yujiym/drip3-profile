import { useEffect } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { getUserPosts } from '@drip3/lib/orbis'
import { loadingAtom, postsAtom, postsCountAtom } from '@drip3/react-lib/atoms'

export default function useGetUserPosts(did: string | undefined) {
  const [loading, setLoading] = useAtom(loadingAtom)
  const [posts, setPosts] = useAtom(postsAtom)
  const count = useAtomValue(postsCountAtom)

  useEffect(() => {
    async function getPosts(did: string) {
      setLoading(true)
      const data = await getUserPosts(did)
      setPosts(data)
      setLoading(false)
      console.log('--getUserPosts', data)
    }
    if (!!did) getPosts(did)
  }, [did])

  return {
    loading,
    data: posts,
    count: count ?? 0,
  }
}
