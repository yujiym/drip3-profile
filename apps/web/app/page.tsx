// import Link from 'next/link'
import Image from 'next/image'
import ImgTop from '@drip3/assets/img/top.png'

export default function TopPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center text-primary">
          <h1 className="font-ss text-4xl text-primary mb-4">DRIP3</h1>
          <p className="mb-12 text-lg">Your web3 portfolio</p>
          <Image src={ImgTop} width={100} alt="DRIP3" className="mx-auto" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-primary text-semiwhite p-8">
        <div>
          <a
            className="font-ss text-lg border-2 pr-5 pl-6 py-2 mt-16 inline-block"
            href="/me/edit"
          >
            Start with ENS &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}
