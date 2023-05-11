// import dynamic from 'next/dynamic';
// import Heading from './Heading';
import Link from 'next/link';
import Image from 'next/image';

import LogoFooter from './LogoFooter';
import s from '@/styles/Footer.module.scss';

// const Call = dynamic(() => import('./call'), { ssr: false });

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.logoContainer}>
        <LogoFooter width={65} height={44} />
        <span className={s.shop}>shop</span>
      </div>
      <div className={s.contactsContainer}>
        <span className={s.text}>our socials</span>
        <div className={s.icons}>
          <Link href='/'>
            <div className={s.icon}>
              <Image
                alt='Icon for telegram'
                src='/img/footer/tgIcon.svg'
                fill
                // priority={true}
              />
            </div>
          </Link>
          <Link href='/'>
            <div className={s.icon}>
              <Image
                alt='Icon for insta'
                src='/img/footer/instaIcon.svg'
                fill
                // priority={true}
              />
            </div>
          </Link>
          <Link href='/'>
            <div className={s.icon}>
              <Image
                alt='Icon for utub'
                src='/img/footer/utubIcon.svg'
                fill
                // priority={true}
              />
            </div>
          </Link>
        </div>
        <div className={s.phone}>+38 (063) 633 63 63</div>
        <div className={s.hours}>
          <div className={s.hour}>working hours</div>
          <div className={s.hour}>9-21</div>
        </div>
        <span className={s.copyright}>(c) 2023</span>
      </div>
      {/* <Heading tag='h3' text='Created by SIA' /> */}
    </footer>
  );
}
