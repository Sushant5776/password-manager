import { NavButtonProps } from 'types/components/NavButton'
import { useDispatch } from 'react-redux'
import { hide, show } from 'utils/stateManager/formState'
import { RootDispatch } from 'utils/stateManager'
import { resetSignInForm } from 'utils/stateManager/signInFormState'
import { signOut } from 'next-auth/react'

const NavButton = ({ text, backgroundColor }: NavButtonProps) => {
  const dispatch: RootDispatch = useDispatch()

  const showForm = () => {
    dispatch(show())
  }

  const hideForm = () => {
    dispatch(hide())
    dispatch(resetSignInForm())
  }

  if (text === 'Sign Out') {
    return (
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        className="text-white bg-rakhadi rounded-md transition hover:bg-slate-500 active:text-slate-500 active:bg-zinc-200 font-medium py-1 sm:py-2 shadow-md block sm:inline mx-auto sm:px-6 px-3"
      >
        {text}
      </button>
    )
  }

  return (
    <button
      onClick={text === 'Sign In' ? () => showForm() : () => hideForm()}
      className={`text-white ${
        backgroundColor === 'laal'
          ? 'bg-laal active:bg-rakhadi'
          : 'bg-rakhadi active:bg-rakhadi'
      } rounded-md font-medium hover:bg-gray-500 transition py-1 sm:py-2 block sm:inline mx-auto sm:px-6 px-3`}
    >
      {text}
    </button>
  )
}

export default NavButton
