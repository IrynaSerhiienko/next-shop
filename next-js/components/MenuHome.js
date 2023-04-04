import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import s from '@/styles/MenuHome.module.scss';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/free-mode';

export default function MenuHome({ cakes }) {
  return (
    <section className={s.menuContainer}>
      <div className={s.titleHolder}>
        <Image
          className={s.title}
          src='/img/main_menu/menu_title.svg'
          width={114}
          height={44}
          alt='preview'
        />

        <Image
          className={s.subTitle}
          src='/img/main_menu/menu_subtitle.svg'
          width={227}
          height={24}
          alt='preview'
        />
      </div>

      <div className={`${s.swiperHolder}`}>
        <Swiper
          freeMode={true}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
          className='mySwiper'
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
          <SwiperSlide className='bg-gray-400'>
            <Image src='/img/main_404/404.png' width={570} height={340} alt='preview' />
          </SwiperSlide>
          <SwiperSlide className='bg-gray-400'>
            <Image src='/img/main_404/404.png' width={570} height={340} alt='preview' />
          </SwiperSlide>
          <SwiperSlide className='bg-gray-400'>
            <Image src='/img/main_404/404.png' width={570} height={340} alt='preview' />
          </SwiperSlide>
          {/* {cakes &&
            cakes.map((cake) => (
              <SwiperSlide key={cake.id} className={`${s.slide}`}>
                <div className={s.card}>
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    width={266}
                    height={404}
                    className={s.img}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
                  />

                  <div className='pr-4 pl-6 '>
                    <strong>{cake.name}</strong>
                    <p className='mt-4'>Price: {cake.price} UAH</p>
                    <div className='flex items-end'>
                      <p className='mb-4 mr-20'>Weight: {cake.weight} kg </p>
                      <button className={s.btnAdd}>
                        <span className={s.iconHolder}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))} */}
        </Swiper>
      </div>

      <div className={s.link}>
        <Link href='/menu'>
          <span className='block text-black text-2xl'>more</span>
          <Image src='/img/main_menu/arrow_more.svg' width={324} height={0} alt='arrow_more' />
        </Link>
      </div>
    </section>
  );
}

//   const cards = [
//     {
//       image:
//         'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg',
//       title: 'Avatar: The Way of Water',
//       subTitle:
//         'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
//       interval: 1500,
//     },
//     {
//       image:
//         'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
//       title: 'Black Adam',
//       subTitle:
//         'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
//       interval: 500,
//     },
//     {
//       image:
//         'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg',
//       title: 'Black Panther: Wakanda Forever',
//       subTitle:
//         'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
//       interval: 2500,
//     },
//     {
//       image:
//         'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg',
//       title: 'Black Panther: Wakanda Forever',
//       subTitle:
//         'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
//       interval: 2500,
//     },
//     {
//       image:
//         'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg',
//       title: 'Black Panther: Wakanda Forever',
//       subTitle:
//         'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
//       interval: 2500,
//     },
//     {
//       image:
//         'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg',
//       title: 'Black Panther: Wakanda Forever',
//       subTitle:
//         'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
//       interval: 2500,
//     },
//     {
//       image:
//         'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg',
//       title: 'Black Panther: Wakanda Forever',
//       subTitle:
//         'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
//       interval: 2500,
//     },
//   ];

// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide, SwiperWrapper } from 'swiper/react';
// import Image from 'next/image';
// import Link from 'next/link';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import s from '@/styles/MenuHome.module.scss';

// import { Autoplay, Pagination, Scrollbar, Navigation } from 'swiper';

// export default function MenuHome({ cakes }) {
//   return (
//     <section className={s.menuContainer}>
//       <div className={s.titleHolder}>
//         <Image
//           className={s.title}
//           src='/img/main_menu/menu_title.svg'
//           width={114}
//           height={44}
//           alt='preview'
//         />

//         <Image
//           className={s.subTitle}
//           src='/img/main_menu/menu_subtitle.svg'
//           width={227}
//           height={24}
//           alt='preview'
//         />
//       </div>

//       <div className={`${s.swiperHolder}`}>
//         <Swiper
//           className={`${s.swiper}`}
//           slidesPerView={3}
//           spaceBetween={20}
//           loop={true}
//           virtualTranslate={true}
//           autoplay={{
//             delay: 1000,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           scrollbar={{ draggable: true }}
//           grabCursor={true}
//           navigation={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           breakpoints={{
//             320: {
//               slidesPerView: 1.5,
//             },
//             375: {
//               slidesPerView: 1.7,
//             },
//             425: {
//               slidesPerView: 2.2,
//             },
//             768: {
//               slidesPerView: 3,
//               //autoplay: false,
//             },
//           }}
//         >

// {cards.map((card) => (
//     <SwiperSlide key={card.image}>
//       <img src={card.image} alt={card.title} />
//     </SwiperSlide>
//   ))}
