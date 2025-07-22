import MobileMenu from './MobileMenu.tsx'
import Navbar from './Navbar.tsx'

const Header = () => {
  return (
    <>
      {/* MobileMenu doar pe mobil */}
      <div className="block lg:hidden">
        <MobileMenu />
      </div>

      {/* Navbar doar pe desktop */}
      <div className="hidden lg:block">
        <Navbar />
      </div>
    </>
  )
};
export default Header;