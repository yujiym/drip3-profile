import style from './Loading.module.css'

const LoadingText = ({ text = 'DRIPPING...' }) => (
  <div className="flex justify-center items-center min-h-screen w-full">
    <h1 data-text={text} className={`${style.loading} font-ss text-2xl`}>
      {text}
    </h1>
  </div>
)

export default LoadingText
