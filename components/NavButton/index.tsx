const NavButton = ({
  text,
  backgroundColor,
}: {
  text: string
  backgroundColor: 'laal' | 'rakhadi'
}) => {
  return (
    <button
      className={`text-white bg-${backgroundColor} rounded-md font-medium py-2 px-6`}
    >
      {text}
    </button>
  )
}

export default NavButton
