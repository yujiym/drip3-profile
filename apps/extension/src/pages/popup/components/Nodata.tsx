import { BoxSelectIcon } from 'lucide-react'

const Nodata = ({ text = 'No data' }) => {
  return (
    <div className="mt-48 flex justify-center items-center text-violet-900/50">
      <div className="flex flex-col items-center">
        <BoxSelectIcon size={32} />
        <p className="font-ss pt-1">{text}</p>
      </div>
    </div>
  )
}

export default Nodata
