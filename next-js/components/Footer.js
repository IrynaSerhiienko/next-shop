// import dynamic from 'next/dynamic';
// import Heading from './Heading';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import LogoFooter from './LogoFooter';
import s from '@/styles/Footer.module.scss';
import Links from './Links';
import LinksPart1 from './LinksPart1';
import LinksPart2 from './LinksPart2';
// import Links1 from './Links1';

// const Call = dynamic(() => import('./call'), { ssr: false });

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
        {/* <div className={s.totalContainer1}>
          <span className={s.shop1}>shop</span>
          <div className={s.linksContainer}>
            <LinksPart1 />
            <LinksPart2 />
          </div>
        </div> */}

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
            {/* <span className={s.shop2}>shop</span> */}
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
              <div className={s.hour1}>working hours</div>
              <div className={s.hour2}>9-21</div>
            </div>
            <span className={s.copyright}>(c) 2023</span>
          </div>
        </div>
        {/* <Heading tag='h3' text='Created by SIA' /> */}
      </footer>
    )
  ) : null;
}
