import Layout from '../components/Layout'
import Spinner from '../components/Spinner'
import ConversationLists from '../components/ConversationLists'
import FloatingButton from '../components/FloatingButton'
import Nodata from '../components/Nodata'
import useConversations from 'ui/hooks/useConversations'
import { MailPlusIcon } from 'lucide-react'

const Conversations = () => {
  const { loading, data, count } = useConversations()

  return (
    <Layout title="Messages" activeTab="mail">
      <>
        {loading ? (
          <Spinner klass="mt-48" />
        ) : count > 0 ? (
          <ConversationLists data={data} />
        ) : (
          <Nodata text="No conversations" />
        )}
        <FloatingButton>
          <MailPlusIcon size={22} />
        </FloatingButton>
      </>
    </Layout>
  )
}

export default Conversations
