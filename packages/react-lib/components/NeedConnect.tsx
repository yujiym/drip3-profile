'use client'
import useSession from '@drip3/react-lib/hooks/useSession'
import Image from 'next/image'
import ImgLogo from '@drip3/assets/img/logo.svg'

export default function NeedConnect() {
  const { handleConnect } = useSession()

  return (
    <div className="w-screen h-screen flex justify-center items-center text-center">
      <div>
        <h1 className="font-ss text-3xl text-primary">drip3</h1>
        <Image
          src={ImgLogo}
          width={48}
          alt="DRIP3"
          className="mx-auto mt-4 mb-16"
        />
        <button
          className="bg-primary text-semiwhite px-8 py-3 rounded-full hover:brightness-110 font-bold"
          onClick={() => handleConnect()}
        >
          Connect
        </button>
      </div>
    </div>
  )
}
