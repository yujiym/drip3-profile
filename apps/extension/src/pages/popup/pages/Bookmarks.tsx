import Layout from '../components/Layout'
import Spinner from '../components/Spinner'
import BookmarkLists from '../components/BookmarkLists'
import FloatingButton from '../components/FloatingButton'
import useMyBookmarks from 'ui/hooks/useMyBookmarks'
import { BoxSelectIcon, MailPlusIcon } from 'lucide-react'

const Bookmarks = () => {
  const { loading, data, count } = useMyBookmarks()

  return (
    <Layout title="Bookmarks" activeTab="bookmark">
      <>
        {loading ? (
          <Spinner klass="mt-48" />
        ) : count > 0 ? (
          <>
            <BookmarkLists data={data} />
            <FloatingButton>
              <MailPlusIcon size={22} />
            </FloatingButton>
          </>
        ) : (
          <div className="mt-48 flex justify-center items-center">
            <div>
              <BoxSelectIcon />
              No Data
            </div>
          </div>
        )}
      </>
    </Layout>
  )
}

export default Bookmarks
