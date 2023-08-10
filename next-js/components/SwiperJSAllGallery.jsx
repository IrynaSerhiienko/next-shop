import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';
import Image from 'next/image';

import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/free-mode';

import s from '@/styles/SwiperJSAllGallery.module.scss';

export default function SwiperJSAllGallery({ gallery }) {
  return (
    <div className={s.swiperHolder}>
        <Swiper
          className={s.swiper}
          freeMode={true}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 12,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 20,
              //autoplay: false,
            },
            1130: {
                slidesPerView: 1.75,
                spaceBetween: 20,
                //autoplay: false,
            },
          }}
        >
            {gallery &&
            gallery.map((cake) => (
              <SwiperSlide key={cake.id} className={s.slide}>
                <div className={s.cakeHolder}>
                    <Image
                        alt='Cake'
                        src={cake.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={true}
                        style={{objectFit: "cover", borderRadius: "50%"}}
                        // loading='eager'
                    />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}
