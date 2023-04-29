import Image from 'next/image';
import s from '../styles/Hero.module.scss';

export default function Hero() {
  return (
    <div className={s.hero}>
      <div className={s.containerLeft}>
        <div className={s.phone}>
          <Image
            //   className={s.phone}
            src='/img/main_hero/phone_mb.png'
            width={65}
            height={70}
            alt='preview'
          />
        </div>
        <div className={s.scroll}>
          <Image
            //   className={s.hero}
            src='/img/main_hero/scroll.svg'
            width={64}
            height={184}
            alt='preview'
          />
        </div>
      </div>
      <div className={s.containerRight}>
        <div className={s.img}>
          <Image
            //   className={s.hero}
            //   src='/img/main_hero/hero.svg'
            src='/img/main_hero/hero_mb.png'
            //   width={1013}
            //   height={654}
            width={265}
            height={300}
            alt='preview'
          />
        </div>
        <div className={s.text}>
          <Image
            //   className={s.hero}
            src='/img/main_hero/text.svg'
            width={204}
            height={32}
            alt='preview'
          />
        </div>
        <div className={s.logo}>
          <Image
            //   className={s.hero}
            src='/img/main_hero/logo.svg'
            width={358}
            height={265}
            alt='preview'
          />
        </div>
      </div>

      {/* <div className={s.containerHero}>
        <Image
          className={s.hero}
          src='/img/main_hero/hero.png'
          width={265}
          height={300}
          alt='preview'
        />
      </div> */}
      {/* <div className={s.containerText}>
        <Image
          className={s.text}
          src='/img/main_hero/text.png'
          width={204}
          height={32}
          alt='preview'
        />
      </div> */}
      {/* <div className={s.containerLogo}>
        <Image
          className={s.logo}
          src='/img/main_hero/yana-caker.png'
          width={358}
          height={265}
          alt='preview'
        />
      </div> */}
    </div>
  );
}
