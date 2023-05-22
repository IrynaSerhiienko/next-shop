import Image from 'next/image';
import Link from 'next/link';
import MenuTitle from './MenuTitle';
import SwiperJSAllCakes from './SwiperJSAllCakes';
import s from '../styles/MenuHome.module.scss';

export default function MenuHome({ menu }) {
  return (
    <section className={s.menuContainer}>
      <div className={s.wrapper}>
        <MenuTitle />
        <div className={s.swiperContainer}>
          <SwiperJSAllCakes menu={menu} />
          <div className={s.link}>
            <Link href='/menu'>
              <span className={s.text}>more</span>
              <div className={s.imgContainer}>
                <Image
                  alt='arrow_more'
                  src='/img/main_menu/arrow_more.svg'
                  fill
                  priority={true}
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
