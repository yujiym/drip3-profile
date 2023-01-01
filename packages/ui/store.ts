import create from 'zustand'
import { devtools } from 'zustand/middleware'

type Session = {
  did: string
  details: any
}

type Store = {
  session: Session
  isModalOpen: boolean
  isConnected: () => boolean
  username: () => string
  setSession: (payload: Session) => void
  resetSession: () => void
  toggleIsModalOpen: () => void
}

export const shortAddress = (address: string, pre: number = 5, post: number = 4): string =>
  !!address
    ? `${address.substring(0, pre)}...${address.substring(address.length - post, address.length)}`
    : ''

export const useStore = create<Store>()(
  devtools(
    (set, get) => ({
      session: { did: '', details: {} },
      isModalOpen: false,
      isConnected: () => !!get().session.did,
      username: () =>
        get().session.details?.profile?.username ??
        get().session.details?.metadata?.ensName ??
        shortAddress(get().session.details?.metadata?.address),
      setSession: (payload: Session) =>
        set((state) =>
          !get().session.did
            ? { session: { did: payload.did, details: payload.details } }
            : { session: { did: state.session.did, details: state.session.details } }
        ),
      resetSession: () => set({ session: { did: '', details: {} } }),
      toggleIsModalOpen: () => set((state) => ({ isModalOpen: !state.isModalOpen }))
    }),
    { enabled: process.env.NODE_ENV === 'development' }
  )
)
