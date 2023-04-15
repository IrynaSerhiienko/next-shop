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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className={s.nav}>
      <Logo />
      {debouncedIsMobile[0] ?
        (<BurgerMenu isMenuOpen={isMenuOpen} isMobile={isMobile} toggleMenu={toggleMenu}/>) :
        (isMenuOpen ? null : <Links isMobile={isMobile}/>)}
    </nav>
  );
}




