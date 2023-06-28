import Logo from 'components/Logo/Logo';
import Icon from 'components/Icon';
import s from './Footer.module.scss';

export default function Footer(params) {
  return (
    <footer className={s.footer}>
      <div className={`${s.footerWrap} container `}>
        <div className={s.footerBg}></div>
        <div>
          <Logo />
          <p className={s.text}>
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </p>
          <ul className={s.socialLinks}>
            <li>
              <a href="https://www.facebook.com/">
                <Icon iconName="icon-facebook" width={32} height={32} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <Icon iconName="icon-twitter" width={32} height={32} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <Icon iconName="icon-instagram" width={32} height={32} />
              </a>
            </li>
          </ul>
        </div>

        <div className={s.links}>
          <div>
            <h3 className={s.listTitle}>Property</h3>
            <ul className={s.linksList}>
              <li>
                <a href="/house">House</a>
              </li>
              <li>
                <a href="/apartment">Apartment</a>
              </li>
              <li>
                <a href="/villa">Villa</a>
              </li>
            </ul>
          </div>
          <div style={{ flexShrink: 0 }}>
            <h3 className={s.listTitle}>Article</h3>
            <ul className={s.linksList}>
              <li>
                <a href="/new-article">New Article</a>
              </li>
              <li>
                <a href="/popular-article">Popular Article</a>
              </li>
              <li>
                <a href="/most-read">Most Read</a>
              </li>
              <li>
                <a href="/tips-tricks">Tips & Tricks</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={s.listTitle}>Contact</h3>
            <div className={s.linksList}>
              <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
              <a href="tel:06715550110">(671) 555-0110</a>
              <a href="mailto:info@hounter.com">info@hounter.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
