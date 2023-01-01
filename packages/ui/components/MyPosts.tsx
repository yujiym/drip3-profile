'use client'
import { useEffect, useState } from 'react'
import { orbis } from 'ui/hooks/useSession'
import { useStore } from 'ui/store'
import Post from 'ui/components/Post'

export default function MyPosts() {
  const [posts, setPosts] = useState<any[]>([])
  const did = useStore((state) => state.session.did)

  useEffect(() => {
    ;(async () => {
      let { data, error } = await orbis.getPosts({ context: 'drip3.xyz_1672554656', did: did })
      setPosts(data)
      console.log('--getPosts', data, error)
    })()
  }, [])

  return posts.length > 0 ? (
    <ul>
      {posts.map((post: any, i: number) => (
        <Post post={post} />
      ))}
    </ul>
  ) : (
    <p>No posts.</p>
  )
}
