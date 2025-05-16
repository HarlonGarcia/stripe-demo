
import NavItems from './nav';
import AppLogo from "../logo";

const Header = () => {
  return (
    <div
      className='fixed left-[calc(50%-45%)] top-0 pt-6 flex items-center justify-between w-[90%] p-4 bg-gray-50'
    >
        <AppLogo/>
      <NavItems />
    </div>
  )
}

export default Header;
