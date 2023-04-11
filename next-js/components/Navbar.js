import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Logo';
import Links from './Links';
import s from '../styles/Navbar.module.scss';
// import { useState } from 'react';

export default function Navbar() {
  //   const [isMobile, setIsMobile] = useState(true);

  return (
    <nav className={s.nav}>
      <Logo />
      <Links />
    </nav>
  );
}

/* 
  <div className={isMobile ? s.burgerMenu : s.links}> 
  <button className={s.burgerMenu}>
        {isMobile ? (
          <Image src='/img/burger_menu/menu-open.svg' width={28} height={10} alt='menu-open' />
        ) : (
          <Image src='/img/burger_menu/menu-close.svg' width={20} height={10} alt='menu-close' />
        )}
      </button> */
