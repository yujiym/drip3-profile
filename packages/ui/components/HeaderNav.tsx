import Image from 'next/image'
import Link from 'next/link'
import { SaveIcon, SearchIcon, HomeIcon } from 'ui/components/icons'

export default function HeaderNav() {
  return (
    <nav className="bg-semiwhite px-3 fixed w-full z-20 top-0 left-0 border-b border-primary h-16 overflow-hidden">
      <div className="h-full flex flex-nowrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <Image src={require('ui/img/logo.png')} height={32} alt="△" className="mx-2" />
          <Image
            src={require('ui/img/title.png')}
            height={16}
            alt="DRIP3"
            className="hidden md:inline-flex"
          />
        </a>
        <div className="inline-flex order-2">
          <button
            type="button"
            className="text-semiwhite bg-primary font-medium text-sm px-5 py-2 text-center"
          >
            <span className="hidden md:inline-flex">Connect</span>
          </button>
        </div>
        <div className="items-center justify-between flex w-auto order-1">
          <ul className="flex p-4 flex-row space-x-8 mt-0 text-sm font-medium">
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 text-primary">
                <HomeIcon />
              </Link>
            </li>
            <li>
              <Link href="/explore" className="block py-2 pl-3 pr-4 text-primary">
                <SearchIcon />
              </Link>
            </li>
            <li>
              <Link href="/saves" className="block py-2 pl-3 pr-4 text-primary">
                <SaveIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
