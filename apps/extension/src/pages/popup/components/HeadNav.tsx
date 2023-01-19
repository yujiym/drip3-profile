import useSession from 'ui/hooks/useSession'
import DropDown from './DropDown'
import { ChevronDownIcon } from 'lucide-react'

const HeadNav = ({ title }: { title: string }) => {
  const { displayName } = useSession()

  return (
    <nav
      className="fixed top-0 right-0 left-0 h-12 border-indigo-800/10 border-b flex justify-between items-center px-4 bg-semiwhite z-30"
      style={{ boxShadow: 'rgb(55 48 163 / 7%) 0px 6px 10px' }}
    >
      <div className="flex">
        <span className="font-ss">{title}</span>
      </div>
      <DropDown>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-stripe mr-1" />
          <span className="text-xs font-bold">{displayName}</span>
          <ChevronDownIcon size={10} className="ml-0.5" />
        </div>
      </DropDown>
    </nav>
  )
}

export default HeadNav
