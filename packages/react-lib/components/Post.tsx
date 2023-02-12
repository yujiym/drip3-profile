import PostForm from '@drip3/react-lib/components/form/Post'

const getImageUrl = (link: string): string =>
  link.match(/^https?:\/{2,}/)
    ? link
    : `${link.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[0]}link`

type ItemProps = {
  title: string
  description: string
  body: string
  imgStyle: any
}

const Card = ({ title, description, body, imgStyle }: ItemProps) => (
  <div className="rounded-2xl shadow-sm bg-white overflow-hidden">
    <div className="w-full" style={imgStyle} />
    <div className="pt-3 pb-4 px-4 overflow-clip">
      <a
        className="font-bold leading-tight"
        href={body}
        target="_blank"
        rel="noreferrer noopener"
      >
        {title}
      </a>
      <div className="mt-1 opacity-70 text-sm overflow-ellipsis overflow-hidden whitespace-nowrap">
        {description}
      </div>
    </div>
  </div>
)

const List = ({ title, description, body, imgStyle }: ItemProps) => (
  <div
    className="rounded-2xl shadow-sm bg-white overflow-hidden flex flex-row"
    style={{ maxHeight: '120px' }}
  >
    <div className="w-full" style={imgStyle} />
    <div className="pt-3 pb-4 px-4 overflow-clip">
      <a
        className="font-bold leading-tight"
        href={body}
        target="_blank"
        rel="noreferrer noopener"
      >
        {title}
      </a>
      <div className="mt-1 opacity-70 text-sm overflow-ellipsis overflow-hidden whitespace-nowrap">
        {description}
      </div>
    </div>
  </div>
)

export default function Post({
  item,
  style = 'list',
  mode = 'view',
}: {
  item: any
  style?: 'list' | 'card'
  mode?: 'view' | 'edit'
}) {
  const title: string =
    item.content.title ??
    item.indexing_metadata?.urlMetadata?.title ??
    item.content.body
  const description: string =
    item.indexing_metadata?.urlMetadata?.description ?? ''
  const image: string = item.indexing_metadata?.urlMetadata?.image ?? ''
  const cardStyle = {
    backgroundImage: `url(${getImageUrl(image)})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    aspectRatio: '600/315',
    maxHeight: '200px',
  }
  const listStyle = {
    backgroundImage: `url(${getImageUrl(image)})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    aspectRatio: '1',
    width: '120px',
    height: '120px',
    maxHeight: '120px',
    maxwidth: '120px',
  }

  return (
    <div className="group relative">
      {style === 'card' && (
        <Card
          title={title}
          description={description}
          imgStyle={cardStyle}
          body={item.content.body}
        />
      )}
      {style === 'list' && (
        <List
          title={title}
          description={description}
          imgStyle={listStyle}
          body={item.content.body}
        />
      )}
      {mode === 'edit' && <PostForm mode="edit" item={item} />}
    </div>
  )
}
