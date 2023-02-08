'use client'
import { useAtomValue } from 'jotai'
import UserPageComponent from '@drip3/react-lib/components/UserPage'
import useSession from '@drip3/react-lib/hooks/useSession'
import useSessionInit from '@drip3/react-lib/hooks/useSessionInit'
import NeedConnect from '@drip3/react-lib/components/NeedConnect'
import Loading from '@drip3/react-lib/components/Loading'
import { sessionAtom, sessionLoadedAtom } from '@drip3/react-lib/atoms'
import useGetUserPosts from '@drip3/react-lib/hooks/useGetUserPosts'

type PageContentProps = {
  did: string | undefined
  uid: string
}

const PageContent = ({ did, uid }: PageContentProps) => {
  const { loading, data, count } = useGetUserPosts(did)
  const session = useAtomValue(sessionAtom)

  return (
    <UserPageComponent profile={session} uid={uid} posts={data} mode="edit" />
  )
}

export default function UserEditPage() {
  useSessionInit()
  const { isConnected, did, ensName } = useSession()
  const loaded = useAtomValue(sessionLoadedAtom)

  return (
    <>
      {loaded ? (
        isConnected ? (
          <PageContent did={did} uid={ensName} />
        ) : (
          <NeedConnect />
        )
      ) : (
        <Loading />
      )}
    </>
  )
}
