import { atom } from 'jotai'
import { atomWithReset } from 'jotai/utils'

export type Session = {
  did: string | undefined
  details: any
}

// session
export const sessionLoadedAtom = atom<boolean>(false)
export const sessionAtom = atomWithReset<Session>({ did: undefined, details: {} })

// util
export const loadingAtom = atom<boolean>(false)

// posts
export const postsAtom = atom<any[]>([])
export const postsCountAtom = atom((get) => get(postsAtom).length)

// conversation
export const conversationsAtom = atom<any[]>([])
export const conversationsCountAtom = atom((get) => get(conversationsAtom).length)

// export const userNameAtom = atom(
//   (get) =>
//     get(sessionAtom).details?.profile?.username ??
//     get(sessionAtom).details?.metadata?.ensName ??
//     shortAddress(get(sessionAtom).details?.metadata?.address)
// )
