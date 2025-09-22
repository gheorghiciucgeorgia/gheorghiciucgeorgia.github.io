import MobileMenu from './MobileMenu.tsx'
import Navbar from './Navbar.tsx'
import './Header.css';

const Header = () => {
  return (
    <div className='w-full bg-[var(--primary-color)]'>
      <div className='menu'>
        {/* MobileMenu doar pe mobil */}
        <div className="block lg:hidden">
          <MobileMenu />
        </div>

        {/* Navbar doar pe desktop */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
      </div>
    </div>
  )
};
export default Header;