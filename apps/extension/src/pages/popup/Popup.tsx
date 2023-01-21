import '@pages/popup/Popup.css'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { useAtomsDebugValue } from 'jotai-devtools'
import TopPage from './pages/Top'
import HomePage from './pages/Home'
import BookmarksPage from './pages/Bookmarks'
import ConversationsPage from './pages/Conversations'
import ConversationPage from './pages/Conversation'
import ProfilePage from './pages/Profile'
import Loading from './components/Loading'
import useSession from 'ui/hooks/useSession'
import useInitialSession from 'ui/hooks/useInitialSession'
import { sessionLoadedAtom } from 'ui/atoms'

const DebugAtoms = () => {
  useAtomsDebugValue()
  return null
}

const RootRouter = () => {
  const { isConnected } = useSession()

  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={isConnected ? <HomePage /> : <TopPage />} />
        <Route path="b" element={<BookmarksPage />} />
        <Route path="m">
          <Route index element={<ConversationsPage />} />
          <Route path=":conversationId" element={<ConversationPage />} />
        </Route>
        <Route path="u/me" element={<ProfilePage tab="links" me />} />
        <Route path="u/me/b" element={<ProfilePage tab="bookmarks" me />} />
      </Routes>
    </MemoryRouter>
  )
}

const Popup = () => {
  useInitialSession()
  const loaded = useAtomValue(sessionLoadedAtom)

  return (
    <div className="App">
      {loaded ? (
        <RootRouter />
      ) : (
        <div className="min-h-screen w-full bg-primary">
          <Loading />
        </div>
      )}
      <DebugAtoms />
    </div>
  )
}

export default Popup
