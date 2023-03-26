import Image from 'next/image';
import s from '../styles/Hero.module.scss';

export default function Hero() {
  return (
    <div className={s.hero}>
      <div className={s.containerHero}>
        <Image
          className={s.hero}
          src='/img/main_hero/hero.png'
          width={670}
          height={654}
          alt='preview'
        />
      </div>
      <div className={s.containerText}>
        <Image
          className={s.text}
          src='/img/main_hero/text.png'
          width={255}
          height={40}
          alt='preview'
        />
      </div>
      <div className={s.containerLogo}>
        <Image
          className={s.logo}
          src='/img/main_hero/yana-caker.png'
          width={378}
          height={280}
          alt='preview'
        />
      </div>
    </div>
  );
}
