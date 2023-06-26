import s from './Navbar.module.scss';
import Icon from 'components/Icon';
export default function Navbar(params) {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <a href="/about">About Us</a>
      </li>
      <li className={s.item}>
        <a href="/article">Article</a>
      </li>
      <li className={s.item}>
        <a href="/property">Property</a>
        <Icon
          style={{ marginLeft: 10 }}
          iconName="icon-arrow"
          width={18}
          height={18}
        />
      </li>
    </ul>
  );
}
