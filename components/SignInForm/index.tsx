import { SignInFormState } from 'types/StoreStates/signInForm'
import { RootDispatch, RootState } from 'utils/stateManager'
import { setUsername } from 'utils/stateManager/signInFormState'
import { signIn } from 'next-auth/react'
import { MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SignInForm = () => {
  const { username } = useSelector<RootState, SignInFormState>(
    (state) => state.signInForm
  )
  const dispatch: RootDispatch = useDispatch()

  const handleSignIn = (event: MouseEvent) => {
    event.preventDefault()

    if (username) {
      signIn('email', {
        callbackUrl: '/dashboard',
        email: username,
      })
    } else {
      alert('Invalid Username')
    }
  }

  return (
    <form className="p-4 rounded-lg w-max h-max border backdrop-blur-3xl shadow-md space-y-4 border-rakhadi/50">
      <h2 className="text-laal font-semibold text-center text-2xl">
        Lets Get In...!
      </h2>
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="font-medium ml-1 text-black/70">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Get a sign in link..."
          className="focus:outline-none w-[18rem] sm:w-[24rem] focus:bg-rakhadi/25 focus:font-medium text-slate-800 bg-rakhadi/[0.15] py-[6px] sm:py-[0.6rem] px-3 rounded-lg"
          value={username}
          onChange={(event) => dispatch(setUsername(event.target.value))}
        />
      </div>
      <button
        onClick={handleSignIn}
        className="bg-laal/90 w-full hover:bg-laal active:scale-95 active:bg-rakhadi transition px-3 py-[0.6rem] rounded-lg text-white font-semibold"
      >
        Sign In
      </button>
    </form>
  )
}

export default SignInForm
