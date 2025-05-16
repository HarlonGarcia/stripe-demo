
import NavItems from './nav';
import AppLogo from "../logo";

const Header = () => {
  return (
    <div
      className='fixed left-[calc(50%-45%)] top-8 flex items-center justify-between w-[90%] p-4 bg-transparent '
    >
        <AppLogo/>
      <NavItems />
    </div>
  )
}

export default Header;
