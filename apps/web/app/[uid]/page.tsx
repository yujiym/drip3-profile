import { getUserDataByUid, getUserData } from '@drip3/lib/orbis'
import UserPageComponent from '@drip3/react-lib/components/UserPage'

export default async function UserPage({ params }: { params: any }) {
  const { address, ensAvatar, did } = await getUserDataByUid(params.uid)
  const { profile, credential, posts } = await getUserData(did)

  return (
    <UserPageComponent
      profile={profile}
      uid={params.uid}
      posts={posts}
      credential={credential}
    />
  )
}
