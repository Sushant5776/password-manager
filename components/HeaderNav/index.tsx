import NavButton from '@/components/NavButton'

const HeaderNav = () => {
  return (
    <nav className="bg-rakhadi/20 w-max p-4 rounded-tl-lg rounded-b-lg space-x-4">
      <NavButton text="Sign In" backgroundColor="laal" />
      <NavButton text="Sign Up" backgroundColor="rakhadi" />
    </nav>
  )
}

export default HeaderNav
