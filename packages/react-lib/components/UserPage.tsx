import Image from 'next/image'
import ActionMenu from '@drip3/react-lib/components/ActionMenu'
import UserPosts from '@drip3/react-lib/components/UserPosts'
import ProfileForm from '@drip3/react-lib/components/form/Profile'
import CreatePostButton from '@drip3/react-lib/components/CreatePostButton'
import { splitName } from '@drip3/lib/utils'

const SideSection = ({
  children,
  mode,
  uid,
}: {
  children: React.ReactNode
  mode: 'view' | 'edit'
  uid: string
  did: string
}) => (
  <nav className="w-screen h-auto md:w-80 lg:w-96 md:sticky md:top-0 md:h-screen md:flex md:justify-between md:flex-col">
    <div className="md:flex-1">{children}</div>
    <ActionMenu uid={uid} mode={mode} />
  </nav>
)

const MainSection = ({ children }: { children: React.ReactNode }) => (
  // <main className="flex-1 min-w-0 overflow-auto">{children}</main>
  <main className="flex-1">{children}</main>
)

type Props = {
  profile: any
  credential?: any
  posts?: any
  uid: string
  mode?: 'edit' | 'view'
}

export default function UserPage({
  profile,
  uid,
  credential,
  posts,
  mode = 'view',
}: Props) {
  const displayName = splitName(uid)

  return (
    <div className="min-h-screen flex container mx-auto">
      <div className="flex w-full flex-col md:flex-row">
        <SideSection mode={mode} uid={uid}>
          <div className="my-12 md:my-20 mx-6 md:mx-8 relative group">
            {mode === 'edit' && <ProfileForm profile={profile} uid={uid} />}
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
            <p className="text-2xl font-bold text-primary mt-8 text-center md:text-left">
              {displayName[0]}
              <span className="opacity-30">.{displayName[1]}</span>
            </p>
            <p className="text-lg mt-8">
              {profile?.details?.profile?.description}
            </p>
          </div>
        </SideSection>
        <MainSection>
          <div className="py-12 md:py-20">
            <UserPosts posts={posts} mode={mode} />
          </div>
        </MainSection>
        {mode === 'edit' && (
          <CreatePostButton
          // title="Create post"
          // onSubmit={handleSubmit(onSubmit)}
          // open={open}
          // setOpen={setOpen}
          ></CreatePostButton>
        )}
      </div>
    </div>
  )
}
