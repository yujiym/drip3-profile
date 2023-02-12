'use client'
import Image from 'next/image'
import ImgLogo from '@drip3/assets/img/logo.svg'

export default function ErrorScreen({
  text,
  children,
}: {
  text: string
  children?: JSX.Element
}) {
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
        <p className="py-3 text-lg">{text}</p>
        {children && children}
      </div>
    </div>
  )
}
