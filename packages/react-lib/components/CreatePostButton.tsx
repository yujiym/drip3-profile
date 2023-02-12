'use client'
import { PackagePlus } from 'lucide-react'
import { cn } from '@drip3/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@drip3/react-lib/components/ui/Dialog'

type Props = {
  title?: string
  description?: string
  className?: string
  children?: React.ReactNode
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  submitText?: string
  open: boolean
  setOpen: (open: boolean) => void
}

export default function CreateButton({
  title,
  description,
  className,
  children,
  submitText = 'Save',
  onSubmit,
  open,
  setOpen,
  ...props
}: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={cn(
            'fixed bottom-24 mb-1 sm:bottom-8 right-8 bg-primary rounded-full text-semiwhite text-sm flex items-center h-14 w-14 justify-center shadow-md hover:opacity-90 z-50',
            className
          )}
          {...props}
        >
          <PackagePlus size={22} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-semiblack text-semiwhite bottom-0 md:bottom-auto">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>
          <div className="pt-8 pb-12">{children}</div>
          <DialogFooter className="px-4">
            <button
              className="bg-primary rounded-full py-3 w-full text-semiwhite"
              type="submit"
            >
              {submitText}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
