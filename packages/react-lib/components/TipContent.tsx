'use client'
import { useState } from 'react'
import useSession from '@drip3/react-lib/hooks/useSession'
import { CupSoda, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  num: z.number(),
})
type SchemaType = z.infer<typeof schema>

export default function TipContent({
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
    getValues,
    formState: { errors },
  } = useForm<SchemaType>({
    defaultValues: {
      num: 1,
    },
    resolver: zodResolver(schema),
  })

  const onSubmit = () => {}

  return (
    <div className="pt-2 px-4 pb-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-lg pb-6">
          Buy <span className="text-primary font-medium">{uid}</span> a coffee
        </p>
        <div className="rounded-md px-6 py-4 flex items-center justify-between border-violet-900/10 border">
          <CupSoda />
          <X size={16} className="mx-4" />
          <input
            type="number"
            className="border-violet-900/10 border rounded-md h-10 w-16 px-2 text-center"
            {...register('num')}
          />
        </div>
        <button
          className="bg-primary text-semiwhite w-full rounded-full h-12 mt-6"
          type="submit"
        >
          Tip ${getValues('num') * 5}
        </button>
      </form>
    </div>
  )
}
