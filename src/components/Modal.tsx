const Modal = ({
  children,
  isOpen,
  onToggle,
}: {
  readonly children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}) => {
  if (!isOpen) return

  return (
    <div
      onClick={onToggle}
      className='fixed top-0 left-0 w-full h-full bg-black/50  flex items-center justify-center z-50'>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  )
}

export default Modal
