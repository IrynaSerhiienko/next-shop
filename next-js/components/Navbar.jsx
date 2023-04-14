// import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import Logo from './Logo';
import Links from './Links';
import BurgerMenu from './BurgerMenu';
import s from '../styles/Navbar.module.scss';
// import { useRouter } from 'next/router';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false,
  );

  const debouncedIsMobile = useDebounce(isMobile, 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={s.nav}>
      <Logo />
      {debouncedIsMobile[0] ? (<BurgerMenu />) : (<Links />)}
    </nav>
  );

//   return (
//     <nav className={s.nav}>
//       <Logo />
//       <Links />
//       {/* {debouncedIsMobile[0] && <BurgerMenu />} */}
//     </nav>
//   );
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
