'use client'
import UserName from '@drip3/react-lib/components/UserName'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@drip3/react-lib/components/ui/Dropdown'
import QRModal from './QrModal'
import QRCode from 'react-qr-code'
import { Share } from 'lucide-react'
import { siteUrl } from '@drip3/lib/const'

export default function ShareButton({ uid }: { uid: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="absolute right-0 top-0 shadow-sm rounded-full w-12 h-12 flex items-center justify-center">
          <Share className="text-primary" size={22} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <QRModal
            title={<UserName uid={uid} className="text-center" />}
            description="my drip3 profile"
          >
            <QRCode
              value={`${siteUrl}/${uid}`}
              bgColor="transparent"
              fgColor="var(--c-primary)"
            />
          </QRModal>
        </DropdownMenuItem>
        <DropdownMenuItem>Copy</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
