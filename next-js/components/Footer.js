import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import LogoFooter from './LogoFooter';

import LinksPart1 from './LinksPart1';
import LinksPart2 from './LinksPart2';
import s from '@/styles/Footer.module.scss';

export default function Footer() {
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
      <footer className={s.footer}>
        <div className={s.totalContainer2}>
          <div className={s.logoContainer}>
            <LogoFooter width={65} height={44} />
            <span className={s.shop2}>shop</span>
          </div>
          <div className={s.contactsContainer}>
            <span className={s.text}>our socials</span>
            <div className={s.icons}>
              <Link href='/'>
                <div className={s.icon}>
                  <Image alt='Icon for telegram' src='/img/footer/tgIcon.svg' fill />
                </div>
              </Link>
              <Link href='/'>
                <div className={s.icon}>
                  <Image alt='Icon for insta' src='/img/footer/instaIcon.svg' fill />
                </div>
              </Link>
              <Link href='/'>
                <div className={s.icon}>
                  <Image alt='Icon for utub' src='/img/footer/utubIcon.svg' fill />
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
        </div>
      </footer>
    ) : (
      <footer className={s.footer}>
        <div className={s.totalContainer1}>
          <span className={s.shop1}>shop</span>
          <div className={s.linksContainer}>
            <LinksPart1 />
            <LinksPart2 />
          </div>
        </div>

        <div className={s.totalContainer2}>
          <div className={s.logoContainer}>
            <LogoFooter width={160} height={118} />
          </div>
          <div className={s.contactsContainer}>
            <span className={s.text}>our socials</span>
            <div className={s.icons}>
              <Link href='/'>
                <div className={s.icon}>
                  <Image alt='Icon for telegram' src='/img/footer/tgIcon.svg' fill />
                </div>
              </Link>
              <Link href='/'>
                <div className={s.icon}>
                  <Image alt='Icon for insta' src='/img/footer/instaIcon.svg' fill />
                </div>
              </Link>
              <Link href='/'>
                <div className={s.icon}>
                  <Image alt='Icon for utub' src='/img/footer/utubIcon.svg' fill />
                </div>
              </Link>
            </div>
            <div className={s.phone}>+38 (063) 633 63 63</div>
            <div className={s.hours}>
              <div className={s.hour1}>working hours</div>
              <div className={s.hour2}>9-21</div>
            </div>
            <span className={s.copyright}>(c) 2023</span>
          </div>
        </div>
      </footer>
    )
  ) : null;
}
