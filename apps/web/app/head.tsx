import { siteTitle, siteDescription } from '@drip3/lib/const'

export default function Head() {
  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
