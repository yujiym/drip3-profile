'use client'
import { atom } from 'jotai'

export default function ActionMenuPop({ children }) {
  const [isMenuOpen, setIsMenuOpen] = atom(false)

  return (
    <div className="z-50 w-96 rounded-md p-4 shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2">
      {children}
    </div>
  )
}
