import Input from '@/components/Input'
import { SignInFormState } from 'interfaces/StoreStates/signInForm'
import { RootDispatch, RootState } from 'lib/stateManager'
import { setUsername, setPassword } from 'lib/stateManager/signInFormState'
import { useDispatch, useSelector } from 'react-redux'

const SignInForm = () => {
  const { username, password } = useSelector<RootState, SignInFormState>(
    (state) => state.signInForm
  )
  const dispatch: RootDispatch = useDispatch()

  return (
    <form className="p-4 rounded-lg w-max h-max border backdrop-blur-3xl shadow-md space-y-4 border-rakhadi/50">
      <h2 className="text-laal font-semibold text-center text-2xl">
        Lets Get In...!
      </h2>
      <Input
        id="email"
        text="Email"
        type="email"
        value={username}
        action={setUsername}
        dispatch={dispatch}
      />
      <Input
        id="password"
        text="Password"
        type="password"
        value={password}
        action={setPassword}
        dispatch={dispatch}
      />
      <button className="bg-laal/90 w-full px-3 py-[6px] rounded-lg text-white font-semibold">
        Sign In
      </button>
    </form>
  )
}

export default SignInForm
