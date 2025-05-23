
import NavItems from './nav';
import AppLogo from "../logo";

const Header = () => {
  return (
    <div
      className='fixed flex items-center justify-between w-[90%] left-[5%] top-0 pt-6 p-4
      z-10 bg-gray-50 border-b border-gray-200'
    >
      <AppLogo />
      <NavItems />
    </div>
  )
}

export default Header;
