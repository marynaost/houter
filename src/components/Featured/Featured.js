import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation } from 'swiper';
import { slidesInfo } from 'components/SlidesInfo';
import 'swiper/css';
import 'swiper/css/navigation';
import s from './Featured.module.scss';
import Icon from 'components/Icon';

export default function Featured() {
  return (
    <section className={`${s.section} `}>
      <p className={s.rek}>Our Recommendation</p>
      <h2 className={s.title}>Featured House</h2>
      <div className={s.buttonWrap}>
        <button className={s.button} type="button">
          <Icon iconName="icon-house" width={24} height={24} fill="#888b97" />{' '}
          House
        </button>
        <button className={s.button} type="button">
          <Icon iconName="icon-villa" width={24} height={24} fill="#888b97" />{' '}
          Villa
        </button>
        <button className={s.button} type="button">
          <Icon
            iconName="icon-apartment"
            width={24}
            height={24}
            fill="#888b97"
          />{' '}
          Apartment
        </button>
      </div>
      <div className={s.slideWrap}>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-navigation-size': '28px',
          }}
          modules={[Virtual, Keyboard, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          virtual
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          loop={true}
          grabCursor={true}
          breakpoints={{
            375: {
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {slidesInfo.map((slide, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div className={s.slideCard}>
                <img className={s.image} src={slide.image} alt={slide.name} />
                <div
                  className={s.category}
                  style={{ backgroundColor: slide.bg }}
                >
                  <Icon
                    iconName={slide.iconName}
                    width={16}
                    height={16}
                    fill={slide.color}
                  />
                  <p style={{ color: slide.color }}>{slide.category}</p>
                </div>
                <h3 className={s.name}>{slide.name}</h3>
                <p className={s.price}>{slide.price} </p>
                <div className={s.personWrap}>
                  <img src={slide.person} alt={slide.personName} />
                  <div>
                    <p className={s.personName}>{slide.personName} </p>
                    <p className={s.personCity}>{slide.city} </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
