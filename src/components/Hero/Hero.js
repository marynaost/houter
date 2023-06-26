import s from './Hero.module.scss';
import Icon from 'components/Icon';
import traveloka from 'images/traveloka_logo.png';
import airbnb from 'images/airbnb.png';
import tiket from 'images/tiket.png';
import tripadvisor from 'images/tripadvisor.png';
import foto1 from 'images/foto1.png';
import foto2 from 'images/foto2.png';
import foto3 from 'images/foto3.png';

export default function Hero(params) {
  return (
    <section className={`${s.section}`}>
      <div className={s.wrap}>
        <h1 className={s.title}>
          find the place to live <span>your dreams</span> easily here
        </h1>
        <p className={s.subtitle}>
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>
        <form className={s.form}>
          <Icon iconName="icon-location" width={24} height={24} />
          <input
            className={s.input}
            placeholder="Search for the location you want!"
            title="Search for the location you want!"
            type="text"
          />
          <button className={s.button} type="submit">
            Search
            <Icon
              iconName="icon-arrow-right"
              width={24}
              height={24}
              fill="#fff"
            />
          </button>
        </form>
        <div className={s.partners}>
          <h2 className={s.partners__title}>Our Partnership </h2>
          <ul className={s.partners__list}>
            <li className={s.partners__item}>
              <a
                href="https://www.traveloka.com/en-en/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={traveloka} alt="traveloka" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiket.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={tiket} alt="tiket" />
              </a>
            </li>
            <li>
              <a
                href="https://www.airbnb.com.ua"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={airbnb} alt="airbnb" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tripadvisor.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={tripadvisor} alt="tripadvisor" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.house}>
        <div style={{ width: 319 }} className={`${s.house__people} ${s.first}`}>
          <img src={foto1} alt="people" />
          <div>
            <p className={s.house__number}>1K+ People</p>
            <p className={s.house__text}>Successfully Getting Home</p>
          </div>
        </div>
        <div style={{ width: 202 }} className={s.house__people}>
          <img src={foto2} alt="people" />
          <div>
            <p className={s.house__number}>56 Houses</p>
            <p className={s.house__text}>Sold Monthly</p>
          </div>
        </div>
        <div style={{ width: 245 }} className={s.house__people}>
          <img src={foto3} alt="people" />
          <div>
            <p className={s.house__number}>4K+</p>
            <p className={s.house__text}>People Looking for New Homes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
