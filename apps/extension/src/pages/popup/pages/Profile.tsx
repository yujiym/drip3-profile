import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import ProfileLink from '../components/ProfileLink'
import BookmarkLists from '../components/BookmarkLists'
import useSession from 'ui/hooks/useSession'
import { ContactIcon, ListPlusIcon, MailIcon, BookmarkIcon } from 'lucide-react'
import useMyBookmarks from 'ui/hooks/useMyBookmarks'

const listItem = [
  {
    order: 1,
    type: 'twitter',
    name: 'Twitter',
    url: 'aaa',
  },
  {
    order: 2,
    type: 'discord',
    name: 'Discord',
    url: 'aaa',
  },
  {
    order: 3,
    type: 'instagram',
    name: 'Instagram',
    url: 'aaa',
  },
  {
    order: 4,
    type: 'telegram',
    name: 'Telegram',
    url: 'aaa',
  },
  {
    order: 5,
    type: 'linkedin',
    name: 'LinkedIn',
    url: 'aaa',
  },
  {
    order: 6,
    type: 'link',
    name: 'my site',
    url: 'aaa',
  },
]

type Props = {
  tab?: 'links' | 'bookmarks'
  me?: boolean
}

const Profile = ({ tab = 'links', me = false }: Props) => {
  const { displayName, description } = useSession()
  const { data, count } = useMyBookmarks()

  return (
    <Layout title="Profile" activeTab="profile">
      <>
        <div className="flex flex-col items-center justify-center py-10">
          <div
            className="rounded-full h-20 w-20 bg-stripe"
            style={{ backgroundSize: '6px 6px' }}
          />
          <div className="mt-3 font-bold">{displayName}</div>
          {!!description && <p className="mt-1 text-center">{description}</p>}
          <div className="mt-6 flex w-full px-10">
            <Link
              to="/u/me"
              className={`flex items-center flex-col px-2 mx-1 py-1 text-center flex-1 border-b-2 ${
                tab === 'links'
                  ? 'border-primary'
                  : 'border-transparent hover:border-violet-900/50'
              }`}
            >
              <ContactIcon size={24} />
              <span className="text-xxs font-bold">Profile</span>
            </Link>
            <Link
              to="/u/me/b"
              className={`flex items-center flex-col px-2 mx-1 py-1 text-center flex-1 border-b-2 ${
                tab === 'bookmarks'
                  ? 'border-primary'
                  : 'border-transparent hover:border-violet-900/40'
              }`}
            >
              <BookmarkIcon size={22} />
              <span className="text-xxs font-bold">{count}</span>
            </Link>
            <button
              className={`flex items-center flex-col px-2 mx-1 py-1 text-center flex-1 border-b-2 border-transparent ${
                me ? 'cursor-not-allowed text-violet-900/40' : 'cursor-pointer'
              }`}
            >
              <MailIcon size={22} />
              <span className="text-xxs font-bold whitespace-nowrap">
                Send Message
              </span>
            </button>
          </div>
        </div>
        {tab === 'links' && (
          <ul className="mx-6 mb-10">
            {listItem.map((item, i) => (
              <ProfileLink
                key={`${item.name}-${i}`}
                klass={item.type}
                name={item.name}
                url={item.url}
                me={me}
              />
            ))}
            {me && (
              <div className="mt-6">
                <button className="bg-primary text-semiwhite rounded-full w-full p-3 font-bold flex items-center justify-center">
                  <ListPlusIcon size={18} className="-ml-4 mr-2" /> Add link
                </button>
              </div>
            )}
          </ul>
        )}
        {tab === 'bookmarks' && <BookmarkLists data={data} isBorderTop />}
      </>
    </Layout>
  )
}

export default Profile
