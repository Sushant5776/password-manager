import HeaderNav from '@/components/HeaderNav'
import { HeaderProps } from 'types/components/Header'

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-3xl sm:ml-32 ml-4 drop-shadow-lg font-semibold text-laal">
        {title}
      </h1>
      {/* Nav Buttons */}
      <HeaderNav />
    </header>
  )
}

export default Header
