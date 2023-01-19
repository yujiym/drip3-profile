const ListItem = ({ item }) => (
  <li className="border-b border-indigo-900/30 p-4">
    <p>aaaa</p>
  </li>
)

const ConversationLists = ({ data }) => {
  return (
    <ul className="mx-2">
      {data.map((item: any, i: number) => (
        <ListItem key={`conversation-list-${i}`} item={item} />
      ))}
    </ul>
  )
}

export default ConversationLists
