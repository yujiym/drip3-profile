import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { orbis } from 'ui/hooks/useInitialSession'
import useSession from 'ui/hooks/useSession'
import { useParams } from 'react-router-dom'
import { loadingAtom, messagesAtom, conversationAtom } from 'ui/atoms'

export default function useConversation() {
  const { did } = useSession()
  const [loading, setLoading] = useAtom(loadingAtom)
  const [conversation, setConversation] = useAtom(conversationAtom)
  const [messages, setMessages] = useAtom(messagesAtom)
  const { conversationId } = useParams()

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const [{ data: dataC, error: errorC }, { data: dataM, error: errorM }] = await Promise.all([
        orbis.getConversation(conversationId),
        orbis.getMessages(conversationId)
      ])
      setConversation(dataC)
      const decryptedData = dataM.map(async (message: any) => {
        const decrypted = await orbis.decryptMessage(message.content)
        console.log('aaaa', message, decrypted)
        return {
          ...message,
          decrypt_content: decrypted
        }
      })
      setMessages(decryptedData)
      setLoading(false)
      console.log('--getConversation', dataC, errorC, '--getMessages', decryptedData, errorM)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    loading,
    data: {
      conversation,
      messages
    },
    count: messages?.length ?? 0
  }
}
