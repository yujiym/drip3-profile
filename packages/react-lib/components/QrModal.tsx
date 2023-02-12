'use client'
import { QrCode } from 'lucide-react'
import { cn } from '@drip3/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@drip3/react-lib/components/ui/Dialog'

type Props = {
  title?: string | JSX.Element
  description?: string
  className?: string
  children?: React.ReactNode
}

export default function QRModal({
  title,
  description,
  className,
  children,
  ...props
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <a
          className={cn(
            'flex items-center py-2 px-3 rounded-md cursor-pointer',
            className
          )}
          {...props}
        >
          <QrCode size={16} className="mr-2.5" />
          Show QR code
        </a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-semiwhite text-semiblack bottom-0 md:bottom-auto">
        <DialogHeader>
          {description && (
            <DialogDescription className="font-ss text-3xl pt-12 pb-20 text-primary text-center">
              {description}
            </DialogDescription>
          )}
          {title && (
            <DialogTitle className="text-primary font-bold text-2xl text-center">
              {title}
            </DialogTitle>
          )}
        </DialogHeader>
        <div className="pt-16 pb-12 mx-auto">{children}</div>
      </DialogContent>
    </Dialog>
  )
}
