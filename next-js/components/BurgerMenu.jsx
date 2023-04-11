import { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './BurgerMenu.module.scss';

const NavMenu = dynamic(() => import('./NavMenu'), { ssr: false });
// const NavMenu = dynamic(() => import('./NavMenu'), { ssr: false });

export default function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <div className={styles.burgerIcon} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      {menuOpen && (
        <NavMenu onClose={toggleMenu} />
      )}
    </div>
  );
};
