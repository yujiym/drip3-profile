'use client'
import { ChatIcon } from 'ui/components/icons'
import { shortAddress } from '../store'
import { unixToFromNow } from 'lib/date'

const getImageUrl = (link: string): string =>
  link.match(/^https?:\/{2,}/) ? link : `${link.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[0]}link`

export default function Post({ post }: { post: any }) {
  const title: string = post.indexing_metadata?.urlMetadata?.title ?? post.content.body
  const description: string = post.indexing_metadata?.urlMetadata?.description ?? ''
  const image: string = post.indexing_metadata?.urlMetadata?.image ?? ''
  const listStyle = image
    ? {
        backgroundImage: `url(${getImageUrl(image)})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        backgroundSize: 'contain',
        backgroundColor: 'rgba(251,249,248,0.5)',
        backgroundBlendMode: 'lighten'
      }
    : {}
  console.log(listStyle)

  return (
    <li className="border-b border-indigo-800/30 p-4" style={listStyle}>
      <a className="font-bold" href={post.content.body} target="_blank" rel="noreferrer noopener">
        {title}
      </a>
      <p className="text-sm">{description}</p>
      {post.content.data?.comment && <div className="flex items-center text-sm mt-2"></div>}
      <div className="flex items-center text-xs mt-1">
        <span className="w-3 h-3 bg-stripe border-primary border rounded-full" />
        <span className="mx-1">{shortAddress(post.creator_details?.metadata?.address)}</span>
        {post.content.data?.comment && (
          <span className="inline-flex items-center ml-4">
            <ChatIcon klass="mr-1 text-indigo-800/50" />
            {post.content.data?.comment}
          </span>
        )}
        <span className="ml-4">{unixToFromNow(post.timestamp)}</span>
      </div>
    </li>
  )
}
