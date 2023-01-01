// import Link from 'next/link'
import Image from 'next/image'

const SoonIcon = (): React.ReactElement => (
  <span
    className="ml-1 opacity-100"
    style={{ filter: 'contrast(0%) invert(100%) hue-rotate(90deg)' }}
  >
    🔜
  </span>
)

export default function TopPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex flex-1 items-center justify-center">
        <div>
          <Image src={require('ui/img/top.png')} width={100} alt="DRIP3" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-primary text-semiwhite p-8">
        <div>
          <h1 className="font-ss text-4xl mb-10">DRIP3</h1>
          <p>
            Decentralized social bookmarking service
            <br />
            build on orbis / ceramic network
          </p>
          <ul className="list-square pl-5 mt-6 text-sm">
            <li>
              Save bookmark
              <ul className="list-square pl-4">
                <li>web</li>
                <li>browser extension</li>
              </ul>
            </li>
            <li className="opacity-60">
              Follow topic & person
              <SoonIcon />
            </li>
            <li className="opacity-60">
              Notification/DM via browser extension
              <SoonIcon />
            </li>
          </ul>
          <a className="font-ss text-lg border-2 pr-5 pl-6 py-2 mt-16 inline-block" href="/home">
            Start &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}
