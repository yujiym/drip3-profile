import HeaderNav from 'ui/components/layouts/HeaderNav'
import FooterNav from 'ui/components/layouts/FooterNav'

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="content">
      <HeaderNav />
      <main className="main">{children}</main>
      <FooterNav />
    </div>
  )
}
