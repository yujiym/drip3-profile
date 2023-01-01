'use client'
import useSession from 'ui/hooks/useSession'
import MyPosts from 'ui/components/MyPosts'

export default function HomePage() {
  useSession()
  return (
    <div className="container mx-auto py-6 px-4">
      <MyPosts />
    </div>
  )
}
