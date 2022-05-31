import Input from '@/components/Input'

const SignUpForm = () => {
  return (
    <form className="p-4 rounded-lg w-max h-max border backdrop-blur-3xl shadow-md space-y-4 border-rakhadi/50">
      <h2 className="text-laal font-semibold text-center text-2xl">
        Lets Join...!
      </h2>
      {/* first and last name container */}
      <div className="flex space-x-4">
        {/* first name */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="firstname" className="font-medium ml-1 text-black/70">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="focus:outline-none max-w-[12rem] focus:bg-rakhadi/25 text-slate-800 focus:font-medium bg-rakhadi/[0.15] py-2 px-3 rounded-lg"
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
            className="focus:outline-none max-w-[12rem] focus:bg-rakhadi/25 text-slate-800 focus:font-medium bg-rakhadi/[0.15] py-2 px-3 rounded-lg"
          />
        </div>
      </div>
      {/* Email */}
      <Input id="email" text="Email" type="email" />
      {/* Password */}
      <Input id="password" text="Password" type="password" />
      {/* Confirm Password */}
      <Input id="confirm_password" text="Confirm Password" type="password" />
      {/* Sign Up */}
      <button className="bg-laal/90 w-full px-3 py-2 rounded-lg text-white font-semibold">
        Sign Up
      </button>
    </form>
  )
}

export default SignUpForm
