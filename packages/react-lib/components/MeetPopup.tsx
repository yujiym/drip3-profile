'use client'
import useSession from '@drip3/react-lib/hooks/useSession'
import { CupSoda, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { HeartHandshake } from 'lucide-react'

const schema = z.object({
  num: z.number(),
})
type SchemaType = z.infer<typeof schema>

export default function MeetPopup({
  uid,
  mode,
}: {
  uid: string
  mode: 'view' | 'edit'
}) {
  const { did, isConnected } = useSession()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SchemaType>({
    defaultValues: {},
    resolver: zodResolver(schema),
  })

  const onSubmit = () => {}

  return (
    <div className="pt-2 px-4 pb-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-lg pb-6">
          Send meet log
          <br />
          to <span className="text-primary font-medium">{uid}</span>
        </p>
        <button
          className="bg-primary text-semiwhite w-full rounded-full h-12 mt-6 flex justify-center items-center"
          type="submit"
        >
          <HeartHandshake />
        </button>
      </form>
    </div>
  )
}
