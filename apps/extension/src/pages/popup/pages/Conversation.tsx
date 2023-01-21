import Layout from '../components/Layout'
import Spinner from '../components/Spinner'
import useConversation from 'ui/hooks/useConversation'
import { SendIcon } from 'lucide-react'
import { unixToFromNow } from 'lib/date'

const MessageInput = () => {
  return (
    <div className="fixed bottom-0 right-0 left-0">
      <SendIcon />
    </div>
  )
}

const Conversation = () => {
  const { loading, data, count } = useConversation()

  return (
    <Layout title="0xCCCCC" hideTab>
      <>
        {loading ? (
          <Spinner klass="mt-48" />
        ) : (
          <>
            <p className="text-center">Created by ****</p>
            {data.messages.map((message) => (
              <>
                <div>{message.decrypt_content}</div>
                <p className="text-xxs">{unixToFromNow(message.timestamp)}</p>
              </>
            ))}
            <MessageInput />
          </>
        )}
      </>
    </Layout>
  )
}

export default Conversation
