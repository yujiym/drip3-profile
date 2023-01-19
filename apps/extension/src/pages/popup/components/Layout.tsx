import HeadNav from '../components/HeadNav'
import BottomNav from '../components/BottomNav'

type Props = {
  activeTab?: 'home' | 'bookmark' | 'mail' | 'profile'
  title?: string
  hideTab?: boolean
  children: JSX.Element
}

const Layout = ({
  activeTab = 'home',
  hideTab = false,
  children,
  title = 'DRIP3',
}: Props) => (
  <>
    <HeadNav title={title} />
    <main className="pt-12 pb-14">{children}</main>
    {!hideTab && <BottomNav activeTab={activeTab} />}
  </>
)

export default Layout
