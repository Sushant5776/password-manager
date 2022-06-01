import { NavButtonProps } from 'interfaces/components/navButton'
import { useDispatch } from 'react-redux'
import { hide, show } from 'store/form'

const NavButton = ({ text, backgroundColor }: NavButtonProps) => {
  const dispatch = useDispatch()

  return (
    <button
      onClick={
        text === 'Sign In' ? () => dispatch(show()) : () => dispatch(hide())
      }
      className={`text-white ${
        backgroundColor === 'laal' ? 'bg-laal' : 'bg-rakhadi'
      } rounded-md font-medium py-1 sm:py-2 block sm:inline mx-auto sm:px-6 px-3`}
    >
      {text}
    </button>
  )
}

export default NavButton
