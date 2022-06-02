import Input from '@/components/Input'
import { Dispatch } from '@reduxjs/toolkit'
import { signUpFormState } from 'interfaces/StoreStates/signUpForm'
import { RootDispatch, RootState } from 'lib/stateManager'
import {
  setEmail,
  setFirstName,
  setLastName,
  setConfirmPassword,
  setPassword,
} from 'lib/stateManager/signUpFormState'
import { useDispatch, useSelector } from 'react-redux'

const SignUpForm = () => {
  const { firstName, lastName, email, password, confirmPassword } = useSelector<
    RootState,
    signUpFormState
  >((state) => state.signUpForm)
  const dispatch: RootDispatch = useDispatch()

  return (
    <form className="sm:p-4 p-2 rounded-lg w-max h-max border backdrop-blur-3xl shadow-md sm:space-y-4 space-y-2 border-rakhadi/50">
      <h2 className="text-laal font-semibold text-center text-xl sm:text-2xl">
        Lets Join...!
      </h2>
      {/* first and last name container */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        {/* first name */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="firstname" className="font-medium ml-1 text-black/70">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="focus:outline-none sm:max-w-[12rem] w-[19rem] sm:w-auto focus:bg-rakhadi/25 text-slate-800 focus:font-medium bg-rakhadi/[0.15] sm:py-2 py-[6px] px-3 rounded-lg"
            value={firstName}
            onChange={(event) => dispatch(setFirstName(event.target.value))}
          />
        </div>
        {/* last name */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="lastname" className="font-medium ml-1 text-black/70">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            className="focus:outline-none sm:max-w-[12rem] w-[19rem] sm:w-auto py-[6px] focus:bg-rakhadi/25 text-slate-800 focus:font-medium bg-rakhadi/[0.15] sm:py-2 px-3 rounded-lg"
            value={lastName}
            onChange={(event) => dispatch(setLastName(event.target.value))}
          />
        </div>
      </div>
      {/* Email */}
      <Input
        id="email"
        text="Email"
        type="email"
        value={email}
        dispatch={dispatch}
        action={setEmail}
      />
      {/* Password */}
      <Input
        id="password"
        text="Password"
        type="password"
        value={password}
        dispatch={dispatch}
        action={setPassword}
      />
      {/* Confirm Password */}
      <Input
        id="confirm_password"
        text="Confirm Password"
        type="password"
        value={confirmPassword}
        dispatch={dispatch}
        action={setConfirmPassword}
      />
      {/* Sign Up */}
      <button className="bg-laal/90 w-full px-3 py-2 rounded-lg text-white font-semibold">
        Sign Up
      </button>
    </form>
  )
}

export default SignUpForm
