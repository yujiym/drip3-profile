'use client'
import Link from 'next/link'
import {
  CupSoda,
  HeartHandshake,
  Send,
  Menu,
  Edit,
  LogOut,
  FileSearch,
  FolderSearch,
  ClipboardCopy,
} from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@drip3/react-lib/components/ui/Popover'
import { logout } from '@drip3/lib/orbis'
import { getCerspanProfile } from '@drip3/lib/utils'
import useSession from '@drip3/react-lib/hooks/useSession'
import QrModal from '@drip3/react-lib/components/QrModal'
import QRCode from 'react-qr-code'
import MessagePanel from '@drip3/react-lib/components/MessagePanel'
import UserName from '@drip3/react-lib/components/UserName'
import { siteUrl } from '@drip3/lib/const'
import { toast } from 'react-hot-toast'

const copyToClipboard = (str: string) => {
  navigator.clipboard.writeText(str)
  toast('Copied', { icon: '📋' })
}

export default function ActionMenu({
  uid,
  mode,
}: {
  uid: string
  mode: 'view' | 'edit'
}) {
  const { did, isConnected } = useSession()

  return (
    <nav className="z-40 w-96 md:w-80 lg:w-96 fixed bottom-8 md:sticky left-1/2 -ml-48 md:left-0 md:ml-0">
      <div className="shadow-lg rounded-full h-14 px-5 mx-5 bg-semiwhite flex justify-around items-center text-primary border border-violet-900/5 relative">
        <MessagePanel did={did}>
          <button className="items-center justify-center hover:bg-cream py-3 px-5 rounded-xl">
            <Send size={24} />
          </button>
        </MessagePanel>
        <button className="justify-center hover:bg-cream py-3 px-5 rounded-xl">
          <CupSoda size={24} />
        </button>
        <button className="justify-center hover:bg-cream py-3 px-5 rounded-xl">
          <HeartHandshake size={24} />
        </button>
        <Popover>
          <PopoverTrigger className="hover:bg-cream py-3 px-5 rounded-xl">
            <Menu size={24} />
          </PopoverTrigger>
          <PopoverContent className="bg-semiblack text-semiwhite fixed bottom-16 md:sticky left-1/2 -ml-48 md:left-0 md:ml-0">
            <ul>
              <li>
                <Link
                  href={getCerspanProfile(did)}
                  className="flex items-center py-2 px-3 rounded-md"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FileSearch size={16} className="mr-2.5" />
                  View on Cerspan
                </Link>
              </li>
              {mode == 'edit' && (
                <li>
                  <Link
                    href={`/${uid}`}
                    className="flex items-center py-2 px-3 rounded-md"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FolderSearch size={16} className="mr-2.5" />
                    Preview profile
                  </Link>
                </li>
              )}
              {mode == 'view' && (
                <>
                  <li>
                    <QrModal
                      title={<UserName uid={uid} className="text-center" />}
                      description="my drip3 profile"
                    >
                      <QRCode
                        value={`${siteUrl}/${uid}`}
                        bgColor="transparent"
                        fgColor="var(--c-primary)"
                      />
                    </QrModal>
                  </li>
                  <li>
                    <a
                      className="flex items-center py-2 px-3 rounded-md cursor-pointer"
                      onClick={() => copyToClipboard(`${siteUrl}/${uid}`)}
                    >
                      <ClipboardCopy size={16} className="mr-2.5" />
                      Copy url
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/me/edit"
                      className="flex items-center py-2 px-3 rounded-md"
                    >
                      <Edit size={16} className="mr-2.5" />
                      Edit profile
                    </Link>
                  </li>
                </>
              )}
              {isConnected && (
                <li>
                  <button
                    className="flex items-center py-2 px-3 rounded-md"
                    onClick={() => logout()}
                  >
                    <LogOut size={16} className="mr-2.5" />
                    SignOut
                  </button>
                </li>
              )}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  )
}
