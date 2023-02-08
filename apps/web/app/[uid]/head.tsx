import { siteTitle } from '@drip3/lib/const'

export default function Head({ params }: { params: any }) {
  const pageTitle: string = `${params.uid} | ${siteTitle}`

  return (
    <>
      <title>{pageTitle}</title>
    </>
  )
}
