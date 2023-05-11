// import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import CallMb from './CallMb';

// const CallMb = dynamic(() => import('./CallMb'), { ssr: false });

import s from '../styles/Hero.module.scss';

export default function Hero() {
  const [mobile, setMobile] = useState(undefined);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 1130 ? true : false);
    };

    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => {
      window.removeEventListener('resize', updateMobile);
    };
  }, []);

  return typeof mobile !== 'undefined' ? (
    mobile ? (
      <div className={s.container}>
        <CallMb />
        <div className={s.hero}>
          <div className={s.part1}>
            <div className={s.img}>
              <Image
                alt='cake'
                src='/img/main_hero/hero.png'
                fill
                sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw'
                priority={true}
                loading='eager'
                as='image'
              />
            </div>
            <div className={s.text}>
              <Image alt='all you need is cake!' src='/img/main_hero/text.svg' fill />
            </div>
            <div className={s.logo}>
              <Image alt='logo_Yana-kaker' src='/img/main_hero/logo.svg' fill />
            </div>
          </div>
          <div className={s.part2}>
            <div className={s.scroll}>
              <Image alt='scroll' src='/img/main_hero/scroll.svg' fill />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className={s.container}>
        <div className={s.hero}>
          <div className={s.part1}>
            <div className={s.img}>
              <Image
                alt='cake'
                src='/img/main_hero/hero.png'
                fill
                sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw'
                priority={true}
                loading='eager'
                as='image'
              />
            </div>
            <div className={s.text}>
              <Image alt='all you need is cake!' src='/img/main_hero/text.svg' fill />
            </div>
            <div className={s.logo}>
              <Image alt='logo_Yana-kaker' src='/img/main_hero/logo.svg' fill />
            </div>
          </div>
          <div className={s.part2}>
            <div className={s.scroll}>
              <Image alt='scroll' src='/img/main_hero/scroll.svg' fill />
            </div>
          </div>
        </div>
      </div>
    )
  ) : null;
}
