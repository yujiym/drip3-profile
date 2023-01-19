import useSession from 'ui/hooks/useSession'

const Top = () => {
  const { handleConnect } = useSession()

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="flex flex-1 items-center justify-center bg-primary text-semiwhite px-8 pt-12 pb-10">
        <div>
          <h1 className="font-ss text-4xl mb-10">DRIP3</h1>
          <p>
            Decentralized social bookmarking service
            <br />
            build on orbis / ceramic network
          </p>
          <a
            className="font-ss border-2 pr-5 pl-6 py-2 mt-16 inline-block cursor-pointer"
            onClick={() => handleConnect()}
          >
            SignIn &rarr;
          </a>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img src="/top.png" className="w-20" />
      </div>
    </div>
  )
}

export default Top
