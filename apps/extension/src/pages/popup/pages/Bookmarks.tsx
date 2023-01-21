import Layout from '../components/Layout'
import Spinner from '../components/Spinner'
import BookmarkLists from '../components/BookmarkLists'
import FloatingButton from '../components/FloatingButton'
import Nodata from '../components/Nodata'
import useMyBookmarks from 'ui/hooks/useMyBookmarks'
import { BookmarkPlusIcon } from 'lucide-react'

const Bookmarks = () => {
  const { loading, data, count } = useMyBookmarks()

  return (
    <Layout title="Bookmarks" activeTab="bookmark">
      <>
        {loading ? (
          <Spinner klass="mt-48" />
        ) : count > 0 ? (
          <BookmarkLists data={data} />
        ) : (
          <Nodata text="No bookmarks" />
        )}
        <FloatingButton>
          <BookmarkPlusIcon size={22} />
        </FloatingButton>
      </>
    </Layout>
  )
}

export default Bookmarks
