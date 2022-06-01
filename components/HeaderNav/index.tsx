import NavButton from '@/components/NavButton'

const HeaderNav = () => {
  return (
    <nav className="bg-rakhadi/20 w-max sm:p-4 p-2 rounded-tl-lg rounded-b-lg space-y-2 sm:space-y-0 sm:space-x-4">
      <NavButton text="Sign In" backgroundColor="laal" />
      <NavButton text="Sign Up" backgroundColor="rakhadi" />
    </nav>
  )
}

export default HeaderNav
