import { Link } from 'react-router-dom'
import { unixToFromNow } from 'lib/date'

const ListItem = ({ item }) => (
  <li className="border-b border-indigo-900/30 p-4">
    <Link to={`/m/${item.stream_id}`}>
      <div className="bg-stripe w-8 h-8 rounded-full" />
      <div className="flex text-xxs justify-between">
        <a>aaa</a>
        <p>{unixToFromNow(item.last_message_timestamp)}</p>
      </div>
    </Link>
  </li>
)

const ConversationLists = ({ data, isBorderTop = false }) => {
  return (
    <ul
      className={`mx-2 ${isBorderTop ? 'border-t border-indigo-900/30' : ''}`}
    >
      {data.map((item: any, i: number) => (
        <ListItem key={`conversation-list-${i}`} item={item} />
      ))}
    </ul>
  )
}

export default ConversationLists
