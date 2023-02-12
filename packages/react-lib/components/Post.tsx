import EditButton from '@drip3/react-lib/components/EditButton'

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
  <div className="rounded-2xl shadow-sm bg-white overflow-hidden flex flex-row">
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
  mode = 'view',
}: {
  item: any
  mode?: 'view' | 'edit'
}) {
  const title: string =
    item.indexing_metadata?.urlMetadata?.title ?? item.content.body
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
    width: '100px',
    height: '100px',
    maxHeight: '100px',
  }

  return (
    <div className="group relative">
      <Card
        title={title}
        description={description}
        imgStyle={cardStyle}
        body={item.content.body}
      />
      {mode === 'edit' && (
        <EditButton className="absolute -top-2 -right-2 transition-opacity opacity-0 group-hover:opacity-100" />
      )}
      {/* <div className="group relative">
        <List
          title={title}
          description={description}
          imgStyle={listStyle}
          body={item.content.body}
        />
        {mode === 'edit' && (
          <EditButton className="absolute -top-2 -right-2 transition-opacity opacity-0 group-hover:opacity-100" />
        )}
      </div>
    </> */}
    </div>
  )
}
