import Layout from '../components/Layout'
import Spinner from '../components/Spinner'
import ConversationLists from '../components/ConversationLists'
import FloatingButton from '../components/FloatingButton'
import useConversations from 'ui/hooks/useConversations'
import { BoxSelectIcon, MailPlusIcon } from 'lucide-react'

const Messages = () => {
  const { loading, data, count } = useConversations()

  return (
    <Layout title="Messages" activeTab="mail">
      <>
        {loading ? (
          <Spinner klass="mt-48" />
        ) : count > 0 ? (
          <>
            <ConversationLists data={data} />
            <FloatingButton>
              <MailPlusIcon size={22} />
            </FloatingButton>
          </>
        ) : (
          <div className="mt-48 flex justify-center items-center">
            <div>
              <BoxSelectIcon />
              No Data
            </div>
          </div>
        )}
      </>
    </Layout>
  )
}

export default Messages
