'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@drip3/react-lib/components/ui/Dialog'
import { Send, CircleSlashed } from 'lucide-react'
import useSession from '@drip3/react-lib/hooks/useSession'
import useGetUserConversations from '@drip3/react-lib/hooks/useGetUserConversations'
import { shortAddress } from '@drip3/lib/utils'
import { unixToFromNow } from '@drip3/lib/date'

type Props = {
  did: string | undefined
  className?: string
  children?: React.ReactNode
}

const ConversationList = () => {
  const { did } = useSession()
  const { data, loading } = useGetUserConversations(did)

  return (
    <>
      {!loading && (
        <ul className="border-b border-violet-900/40">
          {data.length > 0 ? (
            data.map((item: any) => <ConversationItem item={item} />)
          ) : (
            <li className="flex item-center text-gray">
              <CircleSlashed size={16} className="mr-2 mt-1" />
              No messages.
            </li>
          )}
        </ul>
      )}
    </>
  )
}

const ConversationItem = (data: any) => {
  const recipient = data?.item?.recipients_details?.[1]
  const timestamp = data?.item?.last_message_timestamp
  console.log(data, timestamp)

  return (
    <a>
      <li className="flex items-center justify-start border-violet-900/40 border-t py-5 px-6 relative">
        <div
          className="bg-stripe w-9 h-9 rounded-avator mx-auto md:mx-0"
          style={{ backgroundSize: '4px 4px' }}
        />
        <div className="ml-3 flex-1">
          {shortAddress(recipient?.metadata?.address)}
        </div>
        <div className="absolute bottom-2 right-4 text-xs opacity-70">
          {unixToFromNow(data?.item?.last_message_timestamp)}
        </div>
      </li>
    </a>
  )
}

export default function MessagePanel({ className, children, ...props }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-semiwhite text-semiblack right-0 top-0 bottom-0 rounded-none data-[state=open]:slide-in-from-right-10 block">
        <DialogHeader>
          <h3 className="font-ss text-primary text-xl flex items-center mb-8">
            <Send size={18} className="mr-2 mt-1" />
            Message
          </h3>
        </DialogHeader>
        <div className="-mx-8">
          <ConversationList />
        </div>
      </DialogContent>
    </Dialog>
  )
}
