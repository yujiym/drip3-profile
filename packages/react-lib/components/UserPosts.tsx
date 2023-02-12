'use client'
import Post from '@drip3/react-lib/components/Post'
// @ts-ignore
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

type Props = {
  posts?: any
  mode?: 'edit' | 'view'
}

export default function UserPosts({ posts, mode = 'view' }: Props) {
  return (
    <>
      {posts?.length > 0 && (
        <div className="px-6 md:px-8">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2 }}>
            <Masonry gutter="1.5rem">
              {posts?.map((item: any, i: number) => (
                <Post key={`post-${i}`} item={item} mode={mode} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      )}
    </>
  )
}
