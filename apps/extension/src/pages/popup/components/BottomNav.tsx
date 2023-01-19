import { Link } from 'react-router-dom'
import { HomeIcon, MehIcon, BookmarkIcon, MailsIcon } from 'lucide-react'

type ListItem = {
  id: string
  link: string
  icon: JSX.Element
}

const list: ListItem[] = [
  { id: 'home', link: '/', icon: <HomeIcon size={22} /> },
  { id: 'bookmark', link: '/b', icon: <BookmarkIcon size={22} /> },
  { id: 'mail', link: '/m', icon: <MailsIcon size={22} /> },
  { id: 'profile', link: '/u/me', icon: <MehIcon size={22} /> },
]

const Item = ({ isActive, icon, link }) => (
  <Link
    className={`mx-2 flex items-center justify-center text-center flex-col flex-1 ${
      isActive ? 'border-t-2 border-primary' : 'text-indigo-800/50'
    }`}
    to={link}
  >
    {icon}
  </Link>
)

const BottomNav = ({ activeTab }) => (
  <nav
    className="fixed bottom-0 right-0 left-0 h-14 border-indigo-800/10 border-t flex justify-around bg-semiwhite z-30"
    style={{ boxShadow: 'rgb(55 48 163 / 7%) 0px -6px 10px' }}
  >
    {list.map((item: ListItem) => (
      <Item
        key={item.id}
        isActive={item.id === activeTab}
        icon={item.icon}
        link={item.link}
      />
    ))}
  </nav>
)

export default BottomNav
