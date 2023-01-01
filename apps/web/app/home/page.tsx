'use client'
import useSession from 'ui/hooks/useSession'
import AllPosts from 'ui/components/AllPosts'

export default function HomePage() {
  useSession()
  return (
    <div className="container mx-auto py-6 px-4">
      <AllPosts />
    </div>
  )
}
