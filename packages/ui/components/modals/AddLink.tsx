'use client'
import { Dialog } from '@headlessui/react'
import { useStore } from 'ui/store'
import { LinkIcon, PlusIcon, ChatIcon } from 'ui/components/icons'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { orbis } from 'ui/hooks/useSession'

const schema = z.object({
  link: z.string().url(),
  comment: z.string().max(1024).optional()
})

export default function AddLinkModal() {
  const isModalOpen = useStore((state) => state.isModalOpen)
  const toggleIsModalOpen = useStore((state) => state.toggleIsModalOpen)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (data: any) => {
    const res = await orbis.createPost({
      body: data.link,
      context: 'drip3.xyz_1672554656',
      data: {
        url: data.link,
        domainUrl: data.link.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1],
        comment: data.comment ?? ''
      }
    })
    console.log('--addLink', res)
    toggleIsModalOpen()
  }

  return (
    <Dialog open={isModalOpen} onClose={() => toggleIsModalOpen()} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center bg-indigo-900/60 cursor-pointer">
        <Dialog.Panel className="w-full max-w-sm bg-primary text-semiwhite shadow-xl cursor-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-6">
              <h3 className="inline-flex items-center">
                <PlusIcon klass="mr-2" />
                Add link
              </h3>
              <div className="relative flex items-center mt-2">
                <LinkIcon klass="absolute text-primary mx-2 -mb-1" />
                <input
                  type="text"
                  className="text-sm w-full py-3 pl-8 pr-3 text-primary focus:outline-none focus:shadow-outline"
                  {...register('link')}
                />
              </div>
              <p className="text-xs text-right mt-1 opacity-80">{errors.link?.message as string}</p>
              <div className="relative flex items-center mt-2">
                <ChatIcon klass="absolute text-primary mx-2 -mb-1" />
                <input
                  type="text"
                  className="text-sm w-full py-3 pl-8 pr-3 text-primary focus:outline-none focus:shadow-outline"
                  {...register('comment')}
                />
              </div>
              <p className="text-xs text-right mt-1 opacity-80">
                {errors.comment?.message as string}
              </p>
            </div>
            <button
              type="submit"
              className="border-t border-semiwhite w-full pt-3 pb-3 text-sm font-bold"
            >
              Add
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
