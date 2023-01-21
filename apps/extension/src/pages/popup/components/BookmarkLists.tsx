import { MessageSquareIcon } from 'lucide-react'
import { shortAddress } from 'lib/utils'
import { unixToFromNow } from 'lib/date'

const getImageUrl = (link: string): string =>
  link.match(/^https?:\/{2,}/)
    ? link
    : `${link.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[0]}link`

const ListItem = ({ item }: { item: any }) => {
  const title: string =
    item.indexing_metadata?.urlMetadata?.title ?? item.content.body
  const description: string =
    item.indexing_metadata?.urlMetadata?.description ?? ''
  const image: string = item.indexing_metadata?.urlMetadata?.image ?? ''
  console.log('image', image)
  // const listStyle = image
  //   ? {
  //       backgroundImage: `url(${getImageUrl(image)})`,
  //       backgroundRepeat: 'no-repeat',
  //       backgroundPosition: 'right center',
  //       backgroundSize: 'contain',
  //       backgroundColor: 'rgba(251,249,248,0.5)',
  //       backgroundBlendMode: 'lighten',
  //     }
  // : {}

  return (
    <li className="border-b border-indigo-900/30 p-4" style={{}}>
      <a
        className="font-bold text-lg leading-tight"
        href={item.content.body}
        target="_blank"
        rel="noreferrer noopener"
      >
        {title}
      </a>
      <p className="text-xs">{description}</p>
      {item.content.data?.comment && (
        <div className="flex items-center text-sm mt-2"></div>
      )}
      <div className="flex items-center text-xxs mt-2 justify-between">
        <div className="flex items-center">
          By
          <span className="w-3 h-3 bg-stripe border-primary border rounded-full mx-1" />
          {shortAddress(item.creator_details?.metadata?.address)}
        </div>
        <span className="ml-4">{unixToFromNow(item.timestamp)}</span>
      </div>
      {item.content.data?.comment && (
        <p className="flex text-xxs mt-2 bg-violet-900/5 py-2 px-2 rounded-md">
          <MessageSquareIcon
            size={12}
            className="mr-1 mt-0.5 text-indigo-900/50"
          />
          {item.content.data?.comment}
        </p>
      )}
    </li>
  )
}

const BookmarkLists = ({ data, isBorderTop = false }) => {
  return (
    <ul
      className={`mx-2 ${isBorderTop ? 'border-t border-indigo-900/30' : ''}`}
    >
      {data.map((item: any, i: number) => (
        <ListItem key={`my-bookmark-list-${i}`} item={item} />
      ))}
    </ul>
  )
}

export default BookmarkLists
