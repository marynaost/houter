import Logo from 'components/Logo/Logo';
import Navbar from 'components/Navbar/Navbar';
import s from './Header.module.scss';

export default function Header(params) {
  return (
    <header className={`${s.header}  `}>
      <Logo />

      <Navbar />
      <button className={s.signUp} type="button">
        Sign Up!
      </button>
    </header>
  );
}
