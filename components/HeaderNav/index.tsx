import NavButton from '@/components/NavButton'
import { useSession } from 'next-auth/react'

const HeaderNav = () => {
  const { status } = useSession()

  return (
    <nav className="bg-rakhadi/20 w-max sm:p-4 p-2 rounded-tl-lg rounded-b-lg space-y-2 sm:space-y-0 sm:space-x-4">
      {status === 'authenticated' ? (
        <NavButton text="Sign Out" backgroundColor="rakhadi" />
      ) : (
        <>
          <NavButton text="Sign In" backgroundColor="laal" />
          <NavButton text="About Us" backgroundColor="rakhadi" />
        </>
      )}
    </nav>
  )
}

export default HeaderNav
