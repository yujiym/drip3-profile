import '@pages/popup/Popup.css'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { useAtomsDebugValue } from 'jotai-devtools'
import TopPage from './pages/Top'
import HomePage from './pages/Home'
import BookmarksPage from './pages/Bookmarks'
import MessagesPage from './pages/Messages'
import ProfilePage from './pages/Profile'
import Loading from './components/Loading'
import useSession from 'ui/hooks/useSession'
import useInitialSession from 'ui/hooks/useInitialSession'
import { sessionLoadedAtom } from 'ui/atoms'

const DebugAtoms = () => {
  useAtomsDebugValue()
  return null
}
const Popup = () => {
  useInitialSession()
  const { isConnected } = useSession()
  const loaded = useAtomValue(sessionLoadedAtom)

  return (
    <div className="App">
      {loaded ? (
        <MemoryRouter>
          <Routes>
            <Route
              path="/"
              element={isConnected ? <HomePage /> : <TopPage />}
            />
            <Route path="b" element={<BookmarksPage />} />
            <Route path="m" element={<MessagesPage />} />
            <Route path="u/me" element={<ProfilePage tab="links" me />} />
            <Route path="u/me/b" element={<ProfilePage tab="bookmarks" me />} />
          </Routes>
        </MemoryRouter>
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
