// @ts-ignore
import { Orbis } from '@orbisclub/orbis-sdk'
import { ethers } from 'ethers'
import { contextRev } from '@drip3/lib/const'

let orbis = new Orbis()

const provider = new ethers.providers.InfuraProvider(
  1,
  process.env.INFURA_API_KEY
)

export async function getIsConnected() {
  return await orbis.isConnected()
}

export async function logout() {
  return await orbis.logout()
}

export async function getUserDataByUid(uid: string) {
  const [address, ensAvatar] = await Promise.all([
    provider.resolveName(uid),
    provider.getAvatar(uid),
  ])
  const { data: dataDid, error: errDid } = await orbis.getDids(address)
  const did = !!dataDid ? dataDid[0]?.did : ''

  return {
    did,
    address,
    ensAvatar,
  }
}

export async function getUserData(did: string) {
  const [
    { data: dataProfile, error: errProfile },
    { data: dataCredential, error: errCredential },
    { data: dataPosts, error: errPosts },
  ] = await Promise.all([
    await orbis.getProfile(did),
    await orbis.getCredentials(did),
    await orbis.getPosts({
      context: contextRev,
      did,
    }),
  ])

  return {
    profile: dataProfile,
    credential: dataCredential,
    posts: dataPosts,
  }
}

export async function getUserPosts(did: string) {
  const { data, error } = await orbis.getPosts({
    context: contextRev,
    did,
  })
  return data
}

export async function connect() {
  return await orbis.connect_v2({
    chain: 'ethereum',
    lit: true,
  })
}

export async function disconnect(): Promise<void> {
  await orbis.logout()
}

export async function updateProfile(props: object) {
  return await orbis.updateProfile({ ...props })
}

export async function createPost(props: any) {
  return await orbis.createPost({ ...props })
}

export async function efitProfile(streamId: string, obj: any) {
  return await orbis.editPost(streamId, { ...obj })
}

export async function deleteProfile(streamId: string) {
  return await orbis.deletePost(streamId)
}
