import Input from '@/components/Input'

const SignInForm = () => {
  return (
    <form className="p-4 rounded-lg w-max h-max border backdrop-blur-3xl shadow-md space-y-4 border-rakhadi/50">
      <h2 className="text-laal font-semibold text-center text-2xl">
        Lets Get In...!
      </h2>
      <Input id="email" text="Email" type="email" />
      <Input id="password" text="Password" type="password" />
      <button className="bg-laal/90 w-full px-3 py-[6px] rounded-lg text-white font-semibold">
        Sign In
      </button>
    </form>
  )
}

export default SignInForm
