
import NavItems from './nav';
import AppLogo from "../logo";

const Header = () => {
  return (
    <div
      className='fixed left-[calc(50%-45%)] top-8 flex items-center justify-between w-[90%] p-4 bg-transparent '
    >
      <div className='flex gap-1 text-indigo-300/40'>
        {/*<img src={StripeLogo} width={75} />*/}
        <AppLogo/>
      </div>
      <NavItems />
    </div>
  )
}

export default Header;
