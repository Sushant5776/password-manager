import { NavButtonProps } from 'types/components/navButton'
import { useDispatch } from 'react-redux'
import { hide, show } from 'utils/stateManager/formState'
import { RootDispatch } from 'utils/stateManager'
import { resetSignUpForm } from 'utils/stateManager/signUpFormState'
import { resetSignInForm } from 'utils/stateManager/signInFormState'

const NavButton = ({ text, backgroundColor }: NavButtonProps) => {
  const dispatch: RootDispatch = useDispatch()

  const showForm = () => {
    dispatch(show())
    dispatch(resetSignUpForm())
  }

  const hideForm = () => {
    dispatch(hide())
    dispatch(resetSignInForm())
  }

  return (
    <button
      onClick={text === 'Sign In' ? () => showForm() : () => hideForm()}
      className={`text-white ${
        backgroundColor === 'laal' ? 'bg-laal' : 'bg-rakhadi'
      } rounded-md font-medium py-1 sm:py-2 block sm:inline mx-auto sm:px-6 px-3`}
    >
      {text}
    </button>
  )
}

export default NavButton
