import { useState, useEffect } from 'react';
// import { MobileView, isMobile } from 'react-device-detect';
import s from '../styles/Navbar1.module.scss';

import Logo from './Logo';
import Links1 from './Links1';

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setShowOverlay(isOpen);
  }, [isOpen])


  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
      setShowOverlay(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
        <nav className={s.navbar}>
            <Logo />
            <div className={`${s.navItems} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
                <Links1/>
            </div>
            <div className={`${s.navToggle} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
                <div className={s.bar}></div>
            </div>
        </nav>
        {showOverlay && <div className={s.overlay} onClick={() => {setIsOpen(!isOpen); toggleOverlay;}}></div>}
    </>
  );
}






 