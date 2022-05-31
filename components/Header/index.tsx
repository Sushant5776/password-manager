import HeaderNav from '@/components/HeaderNav'

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-3xl ml-32 drop-shadow-lg font-semibold text-laal">
        PassMan
      </h1>
      <HeaderNav />
    </header>
  )
}

export default Header
