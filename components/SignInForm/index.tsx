import { SignInFormState } from 'types/StoreStates/signInForm'
import { RootDispatch, RootState } from 'utils/stateManager'
import { setUsername } from 'utils/stateManager/signInFormState'
import { signIn } from 'next-auth/react'
import { MouseEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'

const SignInForm = () => {
  const { username } = useSelector<RootState, SignInFormState>(
    (state) => state.signInForm
  )
  const dispatch: RootDispatch = useDispatch()
  const [sendMail, setSendMail] = useState(false)
  const [successMail, setSuccessMail] = useState(false)
  const [inputError, setInputError] = useState(false)

  const handleSignIn = async (event: MouseEvent) => {
    event.preventDefault()

    if (username.trim()) {
      // send mail
      setSendMail(true)

      const userAuth = await signIn('email', {
        callbackUrl: '/dashboard',
        email: username,
        redirect: false,
      })

      // mail sent successfully
      setSuccessMail(true)
      setTimeout(() => {
        setSendMail(false)
        setSuccessMail(false)
      }, 1000)
    } else {
      setInputError(true)
      setTimeout(() => setInputError(false), 4000)
    }
  }

  return (
    <>
      {inputError ? (
        <div
          className="bg-red-100 absolute top-4 rounded-lg py-5 px-6 text-base text-red-700"
          role="alert"
        >
          Oops! That doesn't seems like an email.
        </div>
      ) : (
        ''
      )}
      <form className="p-4 rounded-lg w-max h-max border backdrop-blur-3xl shadow-md dark:bg-slate-800 space-y-4 dark:border-white/5 border-rakhadi/50">
        <h2 className="text-laal dark:font-bold font-semibold text-center text-2xl">
          Lets Get In...!
        </h2>
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="email"
            className="font-medium ml-1 dark:text-white/80 text-black/70"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Get a sign in link..."
            className="focus:outline-none w-[18rem] sm:w-[24rem] focus:bg-rakhadi/25 focus:font-medium dark:text-white/90 text-slate-800 dark:bg-white/[0.15] bg-rakhadi/[0.15] py-[6px] sm:py-[0.6rem] px-3 rounded-lg"
            value={username}
            onChange={(event) => dispatch(setUsername(event.target.value))}
          />
        </div>
        <button
          onClick={handleSignIn}
          className="bg-laal/90 w-full flex justify-center align-middle hover:bg-laal active:scale-95 active:bg-rakhadi transition px-3 py-[0.6rem] rounded-lg text-white font-semibold"
        >
          {sendMail ? (
            successMail ? (
              <div className="relative w-6 h-6 text-white/90">
                <Image src="/images/check.svg" layout="fill" />
              </div>
            ) : (
              // <div
              //   className="spinner-border inline-block text-white/60 w-7 h-7 bg-current rounded-full opacity-0"
              //   role="status"
              // >
              //   <span className="visually-hidden">Loading...</span>
              // </div>
              <div className="flex items-center justify-center">
                <div
                  className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full opacity-60"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )
          ) : (
            'Sign In'
          )}
        </button>
      </form>
    </>
  )
}

export default SignInForm
