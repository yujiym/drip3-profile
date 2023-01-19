const FloatingButton = ({ children }) => {
  return (
    <button
      className="fixed right-4 bottom-16 mb-2 z-50 w-12 h-12 bg-primary text-semiwhite rounded-full flex justify-center items-center"
      style={{ boxShadow: 'rgb(55 48 163 / 20%) 6px 6px 10px' }}
    >
      {children}
    </button>
  )
}

export default FloatingButton
