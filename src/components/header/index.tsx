import StripeLogo from '../../assets/stripe-logo.png';
import NavItems from './nav';

const Header = () => {
  return (
    <div
      className='fixed left-[calc(50%-45%)] top-8 flex items-center justify-between w-[90%] p-4 rounded-lg
      bg-indigo-950/60 border-1 border-indigo-400'
    >
      <div className='flex gap-1 text-indigo-300/40'>
        <img src={StripeLogo} width={75} />
        <strong>Demo</strong>
      </div>
      <NavItems />
    </div>
  )
}

export default Header;
