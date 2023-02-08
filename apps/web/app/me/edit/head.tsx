import { siteTitle } from '@drip3/lib/const'

export default function Head() {
  const pageTitle: string = `Edit profile | ${siteTitle}`

  return <title>{pageTitle}</title>
}
