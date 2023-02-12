import { getUserDataByUid, getUserData } from '@drip3/lib/orbis'
import UserPageComponent from '@drip3/react-lib/components/UserPage'
import UserPageColorHandler from '@drip3/react-lib/components/UserPageColorHandler'

export default async function UserPage({ params }: { params: any }) {
  const { address, ensAvatar, did } = await getUserDataByUid(params.uid)
  const { profile, credential, posts } = await getUserData(did)

  return (
    <>
      <UserPageColorHandler
        color={
          profile?.details?.profile?.data?.drip3Config?.color ??
          'var(--c-purple)'
        }
      />
      <UserPageComponent
        profile={profile}
        uid={params.uid}
        posts={posts}
        credential={credential}
      />
    </>
  )
}
