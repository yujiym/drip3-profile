import { splitName, cn } from '@drip3/lib/utils'

export default function UserName({
  uid,
  className,
  ...props
}: {
  uid: string
  className?: string
}) {
  const displayName = splitName(uid)
  return (
    <p className={cn('text-2xl font-bold text-primary', className)} {...props}>
      {displayName[0]}
      <span className="opacity-30">.{displayName[1]}</span>
    </p>
  )
}
