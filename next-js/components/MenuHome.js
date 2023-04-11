import Image from 'next/image';
import Link from 'next/link';
import MenuTitle from './MenuTitle';
import SwiperJS from './SwiperJS';
import s from '@/styles/MenuHome.module.scss';

export default function MenuHome({ cakes }) {
  return (
    <section className={s.menuContainer}>
      <MenuTitle />
      <SwiperJS cakes={cakes} />
      <div className={s.link}>
        <Link href='/menu'>
          <span className='block text-black text-2xl'>more</span>
          <Image
            alt='arrow_more'
            src='/img/main_menu/arrow_more.svg'
            width={324}
            height={1}
            style={{ transform: 'translate3d(0, 0, 0)', width: 'auto' }}
            priority={true}
          />
        </Link>
      </div>
    </section>
  );
}
