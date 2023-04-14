import { useState } from 'react';
import dynamic from 'next/dynamic';
import s from '../styles/BurgerMenu.module.scss';
// import Image from 'next/image';

const Navbar = dynamic(() => import('./Navbar'), { ssr: false });


export default function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={s.burgerMenu}>
      <div className={s.burgerIcon} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      {/* <Navbar onClose={toggleMenu} className={menuOpen ? s.menuOpen : ''} /> */}
      {menuOpen && (
        <Navbar onClose={toggleMenu} />
      )}
    </div>
  );
};


{/* <Image
            alt='burger-menu-open'
            src='/img/burger_menu/menu-open.svg'
            width={28}
            height={10}
            priority={true}
            // style={{ transform: 'translate3d(0, 0, 0)'}}
        /> */}