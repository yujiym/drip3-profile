'use client'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { modalAtom } from '@drip3/react-lib/atoms'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import EditButton from '@drip3/react-lib/components/EditButton'
import { Textarea } from '@drip3/react-lib/components/ui/Textarea'
import { updateProfile } from '@drip3/lib/orbis'

type Props = {
  profile: any
  uid: string
}

const schema = z.object({
  body: z.string().max(500),
  title: z.string().max(140),
  color: z.enum(colors),
})
type SchemaType = z.infer<typeof schema>

export default function PostForm({ profile, uid }: Props) {
  const [open, setOpen] = useAtom(modalAtom)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    defaultValues: {
      description: profile?.details?.profile?.description ?? '',
      color: profile?.details?.profile?.data?.drip3Config?.color ?? 'purple',
    },
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: SchemaType) => {
    await updateProfile({
      ...profile.details.profile,
      description: data.description,
      data: {
        ...profile.details.profile.data,
        drip3Config: {
          color: data.color,
        },
      },
    })
    setOpen(false)
  }

  return (
    <EditButton
      className="absolute -top-2 -right-2 transition-opacity opacity-0 group-hover:opacity-100"
      title="Edit post"
      onSubmit={handleSubmit(onSubmit)}
      open={open}
      setOpen={setOpen}
    >
      <div className="pb-4">
        {profile?.details?.profile?.pfp ? (
          <Image
            src={profile?.details?.profile?.pfp}
            alt={uid}
            className="rounded-avator mx-auto md:mx-0"
            width={128}
            height={128}
          />
        ) : (
          <div
            className="bg-stripe w-32 h-32 rounded-avator mx-auto md:mx-0"
            style={{ backgroundSize: '7px 7px' }}
          />
        )}
      </div>
      <div className="pb-4">
        <div>
          <label htmlFor="description" className="text-right text-xs font-bold">
            Description
          </label>
          <Textarea
            id="description"
            value={profile?.details?.profile?.description ?? ''}
            className=""
            {...register('description')}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="color"
          className="text-right text-xs font-bold flex mb-2"
        >
          Accent color
        </label>
      </div>
    </EditButton>
  )
}
