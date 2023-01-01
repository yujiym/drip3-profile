'use client'
import { ChatIcon } from 'ui/components/icons'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { shortAddress } from '../store'

dayjs.extend(relativeTime)

export default function Post({ post }: { post: any }) {
  return (
    <li className="border-b border-indigo-800/30 p-4">
      <a className="font-bold" href={post.content.body} target="_blank" rel="noreferrer noopener">
        {post.content.body}
      </a>
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
        <span className="ml-4">{dayjs.unix(post.timestamp).fromNow()}</span>
      </div>
    </li>
  )
}
