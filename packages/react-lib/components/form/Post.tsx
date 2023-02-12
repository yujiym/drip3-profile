'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import EditButton from '@drip3/react-lib/components/EditButton'
import { Textarea } from '@drip3/react-lib/components/ui/Textarea'
import { Input } from '@drip3/react-lib/components/ui/Input'
import { createPost, editPost, deletePost } from '@drip3/lib/orbis'
import { toast } from 'react-hot-toast'
import { Trash2 } from 'lucide-react'

type Props = {
  mode: 'create' | 'edit'
  item?: any
}

const schema = z.object({
  link: z.string().url(),
  title: z.string().max(140).optional(),
  comment: z.string().max(255).optional(),
})
type SchemaType = z.infer<typeof schema>

export default function PostForm({ mode = 'edit', item }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    defaultValues: {
      title: item?.content?.title ?? '',
      link: item?.content?.body ?? '',
    },
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: SchemaType) => {
    const content = {
      title: data.title,
      body: data.link,
      data: {
        url: data.link,
        domainUrl: data.link.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1],
        comment: data.comment ?? '',
      },
    }
    if (mode === 'create') {
      await createPost(content)
      toast('Post created', { icon: '👌' })
    } else {
      await editPost('', content)
      toast('Post updated', { icon: '👌' })
    }
  }

  const handleDelete = async (streamId: string) => {
    await deletePost(streamId)
    toast('Post deleted', { icon: '🗑️' })
  }

  return (
    <EditButton
      className={
        mode === 'create'
          ? 'fixed bottom-24 mb-1 sm:bottom-8 right-8 bg-primary rounded-full text-semiwhite text-sm flex items-center h-14 w-14 justify-center shadow-md hover:opacity-90 z-50'
          : 'absolute -top-2 -right-2 transition-opacity opacity-0 group-hover:opacity-100'
      }
      title={mode === 'create' ? 'Create Post' : 'Edit Post'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="pb-4">
        <label htmlFor="title" className="text-right text-xs font-bold">
          Title
        </label>
        <Input id="description" className="" {...register('title')} />
        <div className="text-xs text-right opacity-70 mt-1">
          If title is blank, the title of site will be displayed.
        </div>
      </div>
      <div className="">
        <label htmlFor="link" className="text-right text-xs font-bold">
          Link*
        </label>
        <Input id="link" className="" {...register('link')} />
      </div>
      <div className="flex justify-end">
        <button
          className="flex items-center text-red-300 px-6 py-2 mt-8 border border-red-300 rounded-full text-sm"
          onClick={() => handleDelete(item.stream_id)}
        >
          <Trash2 className="mr-2.5" size={18} />
          Delete
        </button>
      </div>
    </EditButton>
  )
}
