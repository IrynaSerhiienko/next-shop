import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/free-mode';

import Card from './Card';
import s from '@/styles/SwiperJSAllCakes.module.scss';

export default function SwiperJSAllCakes({ menu }) {
  return (
    <div className={s.swiperHolder}>
        <Swiper
          className={s.swiper}
          freeMode={true}
          grabCursor={true}
        //   loop={true}
        //   autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
        //   modules={[FreeMode, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
              //autoplay: false,
            },
          }}
        >
            {menu &&
            menu.map((cake) => (
              <SwiperSlide key={cake.id} className={s.slide}>
                <Card cake={cake}/>
              </SwiperSlide>
            ))}
            
          {/* {cakes &&
            cakes.map((cake) => (
              <SwiperSlide key={cake.id} className={s.slide}>
                <Card cake={cake}/>
              </SwiperSlide>
            ))} */}
        </Swiper>
    </div>
  )
}
