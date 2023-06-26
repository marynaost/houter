import logoimg from 'images/logo.svg';
import s from './Logo.module.scss';

export default function Logo(params) {
  return (
    <a href="/" className={s.link}>
      <img src={logoimg} alt="Logo" />
      <span className={s.text}>Hounter</span>
    </a>
  );
}
