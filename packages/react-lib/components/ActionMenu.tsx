import Link from 'next/link'
import { CupSoda, HeartHandshake, Mail, Menu, Edit, LogOut } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@drip3/react-lib/components/ui/Popover'

export default function ActionMenu() {
  return (
    <nav className="z-40 w-96 fixed bottom-8 md:sticky left-1/2 -ml-48 md:left-0 md:ml-0">
      <div className="shadow-lg rounded-full h-14 px-5 mx-5 bg-semiwhite flex justify-around items-center text-primary border border-primary/5 relative">
        <button className="items-center justify-center hover:bg-cream py-3 px-5 rounded-xl">
          <Mail size={24} />
        </button>
        <button className="justify-center hover:bg-cream py-3 px-5 rounded-xl">
          <CupSoda size={24} />
        </button>
        <button className="justify-center hover:bg-cream py-3 px-5 rounded-xl">
          <HeartHandshake size={24} />
        </button>
        <Popover>
          <PopoverTrigger className="hover:bg-cream py-3 px-5 rounded-xl">
            <Menu size={24} />
          </PopoverTrigger>
          <PopoverContent className="bg-semiblack text-semiwhite fixed bottom-16 md:sticky left-1/2 -ml-48 md:left-0 md:ml-0">
            <ul>
              <li>
                <Link
                  href="/me/edit"
                  className="flex items-center py-2 px-3 rounded-md"
                >
                  <Edit size={16} className="mr-1.5" />
                  Edit
                </Link>
              </li>
              <li>
                <button className="flex items-center py-2 px-3 rounded-md">
                  <LogOut size={16} className="mr-1.5" />
                  SignOut
                </button>
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  )
}
