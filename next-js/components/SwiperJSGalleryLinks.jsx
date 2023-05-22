import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import s from '../styles/SwiperJSGalleryLinks.module.scss';

export default function SwiperJSGalleryLinks ( {galleryLinks} ) {
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
              slidesPerView: 2,
              spaceBetween: 15,
            },
            390: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            480: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
              //autoplay: false,
            },
          }}
        >
            {galleryLinks  &&
            galleryLinks.map((link, index) => (
              <SwiperSlide className={s.slide}>
                <div key={index} className={s.linkHolder}>{link}</div>
              </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}
