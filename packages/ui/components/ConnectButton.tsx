'use client'
import useSession from 'ui/hooks/useSession'
import { useStore } from 'ui/store'
import { PlusIcon } from 'ui/components/icons'
import AddLinkModal from 'ui/components/modals/AddLink'

export default function ConnectButton() {
  const { handleConnect, handleDisconnect } = useSession()
  const username = useStore((state) => state.username)
  const isConnected = useStore((state) => state.isConnected)
  const toggleIsModalOpen = useStore((state) => state.toggleIsModalOpen)

  return !isConnected() ? (
    <button className="btn px-3 py-1 text-sm" onClick={() => handleConnect()}>
      Connect
    </button>
  ) : (
    <>
      <button
        className="inline-flex items-center"
        title="disconnect"
        onClick={() => handleDisconnect()}
      >
        <span className="w-4 h-4 bg-stripe border-primary border rounded-full" />
        <span className="text-xs font-bold ml-1">{username()}</span>
      </button>
      <button className="w-5 h-5 ml-4 mr-2" title="save link" onClick={() => toggleIsModalOpen()}>
        <PlusIcon />
        <AddLinkModal />
      </button>
    </>
  )
}
