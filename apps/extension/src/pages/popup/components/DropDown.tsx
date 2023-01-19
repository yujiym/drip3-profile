import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Meh, LogOut } from 'lucide-react'
import useSession from 'ui/hooks/useSession'
import { Link } from 'react-router-dom'

const DropDown = ({ children }) => {
  const { handleDisconnect } = useSession()

  return (
    <Menu as="div" className="relative z-30">
      <Menu.Button>{children}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 top-7 w-36 origin-top-right divide-y divide-gray-100 rounded-sm bg-semiwhite shadow-lg focus:outline-none border-violet-900/10 border overflow-x-clip">
          <div className="px-2 py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={'/u/me'}
                  className={`${
                    active ? 'bg-violet-900/10' : ''
                  } group flex w-full items-center px-2 py-2 text-sm`}
                >
                  <Meh size={16} className="mr-2" />
                  Edit Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active ? 'bg-violet-900/10' : ''
                  } group flex w-full items-center px-2 py-2 text-sm text-primary`}
                  onClick={() => handleDisconnect()}
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropDown
