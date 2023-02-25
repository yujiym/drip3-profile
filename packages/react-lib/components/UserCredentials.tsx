import { Github, Twitter } from 'lucide-react'

type Props = {
  profile: any
  credential: any
  mode?: 'edit' | 'view'
}

export default function UserCredentials({
  profile,
  credential,
  mode = 'view',
}: Props) {
  const twitterProf = profile?.details?.twitter_details?.username ?? ''
  const githubProf = profile?.details?.github_details?.username ?? ''

  return (
    <>
      {(!!twitterProf || !!githubProf) && (
        <div className="flex text-primary items-center justify-center md:justify-start pt-3">
          {twitterProf && (
            <a
              className="p-1"
              href={`https://twitter.com/${twitterProf}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Twitter size={20} />
            </a>
          )}
          {githubProf && (
            <a
              className="p-1"
              href={`https://github.com/${githubProf}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      )}
    </>
  )
}
