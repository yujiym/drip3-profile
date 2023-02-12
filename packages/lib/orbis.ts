// @ts-ignore
import { Orbis } from '@orbisclub/orbis-sdk'
import { ethers } from 'ethers'
import { contextRev } from '@drip3/lib/const'
import Resizer from 'react-image-file-resizer'

let orbis = new Orbis()

let orbisWithPinta = new Orbis({
  PINATA_GATEWAY: process.env.PINATA_GATEWAY,
  PINATA_API_KEY: process.env.PINATA_API_KEY,
  PINATA_SECRET_API_KEY: process.env.PINATA_SECRET_API_KEY,
})

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

export async function createPost(obj: any) {
  return await orbis.createPost({ context: contextRev, ...obj })
}

export async function editPost(streamId: string, obj: any) {
  return await orbis.editPost(streamId, { context: contextRev, ...obj })
}

export async function deletePost(streamId: string) {
  return await orbis.deletePost(streamId)
}

const resizeFile = (file: string, size = 960) =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      file,
      size, // MaxWidth
      size, // MaxHeight
      'JPEG',
      80, // quolity
      0, // rotation
      uri => {
        resolve(uri)
      },
      'base64'
    )
  })

export async function uploadMedia(file: string, type: string) {
  file.split('.').pop()
  const resized = await resizeFile(file, 960)
  return await orbisWithPinta.uploadMedia(resized)
}
