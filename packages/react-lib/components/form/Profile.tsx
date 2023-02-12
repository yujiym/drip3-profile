'use client'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import EditButton from '@drip3/react-lib/components/EditButton'
import { Textarea } from '@drip3/react-lib/components/ui/Textarea'
import {
  RadioGroup,
  RadioGroupItem,
} from '@drip3/react-lib/components/ui/RadioGroup'
import { updateProfile } from '@drip3/lib/orbis'
import { Input } from '@drip3/react-lib/components/ui/Input'
import { toast } from 'react-hot-toast'

const bgColors: string[] = [
  'bg-purple',
  'bg-orange',
  'bg-magenda',
  'bg-green',
  'bg-blue',
  'bg-yellow',
]
const colors: string[] = bgColors.map((cl: string) => cl.slice(3))

type Props = {
  profile: any
  uid: string
}

const schema = z.object({
  description: z.string().max(1000),
  pfp: z.string(),
  // @ts-ignore
  color: z.enum(colors),
})
type SchemaType = z.infer<typeof schema>

export default function ProfileForm({ profile, uid }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    defaultValues: {
      pfp: profile?.details?.profile?.pfp ?? '',
      description: profile?.details?.profile?.description ?? '',
      color: profile?.details?.profile?.data?.drip3Config?.color ?? 'purple',
    },
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: SchemaType) => {
    await updateProfile({
      username: profile.details.profile.username,
      description: data.description,
      pfp: data.pfp,
      data: {
        ...profile.details.profile.data,
        drip3Config: {
          color: data.color,
        },
      },
    })
    toast('Profile updated', { icon: '👌' })
  }

  return (
    <EditButton
      className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 group-hover:transition-opacity"
      title="Edit profile"
      onSubmit={handleSubmit(onSubmit)}
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
        <div className="mt-2">
          <label htmlFor="pfp" className="text-right text-xs font-bold">
            Profile Picture URL
          </label>
          <Input id="pgp" className="" {...register('pfp')} />
        </div>
      </div>
      <div className="pb-4">
        <div>
          <label htmlFor="description" className="text-right text-xs font-bold">
            Description
          </label>
          <Textarea
            id="description"
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
        <RadioGroup defaultValue={bgColors[0].slice(3)}>
          {bgColors.map((cl: string) => (
            <RadioGroupItem
              key={`color-${cl.slice(3)}`}
              value={cl.slice(3)}
              id={cl.slice(3)}
              className={cl}
              {...register('color')}
            />
          ))}
        </RadioGroup>
      </div>
    </EditButton>
  )
}
