const Loading = ({ klass = '' }) => (
  <div className={`flex justify-center items-center ${klass}`}>
    <div className="animate-spin h-8 w-8 border-4 border-violet-700/50 rounded-full border-t-violet-900/10" />
  </div>
)

export default Loading
