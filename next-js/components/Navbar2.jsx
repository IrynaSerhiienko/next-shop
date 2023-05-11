import { useState, useEffect} from 'react';
import { useDebounce } from 'use-debounce';
// import { useWindowSize } from 'react-use'

import Call from './Call';
import Links1 from './Links1';
import Location from './Location';
import Logo from './Logo';

import s from '../styles/Navbar1.module.scss';


export default function Navbar2() {
// export default function Navbar2({navigation}) {

const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 1130 : false,
);

const debouncedIsMobile = useDebounce(isMobile, 500);


const [isOpen, setIsOpen] = useState(false);
const [showOverlay, setShowOverlay] = useState(false);

const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
}

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1130);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setShowOverlay(isOpen);
    const handleResize = () => {
      setIsOpen(false);
      setShowOverlay(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

    const navLinksLeft = [
        { id: 1, title: 'home', path: '/' },
        { id: 2, title: 'about us', path: '/aboutUs' },
        { id: 3, title: 'menu', path: '/menu' },
        { id: 4, title: 'contacts', path: '/contacts' },
    ];
    
    const navLinksRight = [
        { id: 5, title: 'gallery', path: '/gallery' },
        { id: 6, title: 'payment & delivery', path: '/paymentDelivery' },
        { id: 7, title: 'reviews', path: '/reviews' },
        //   { id: 8, title: 'Posts', path: '/posts' },
    ];


  return (
    <>
        {isMobile ?
        // {debouncedIsMobile[0] ?
         (<>
            <nav className={s.navbar}>
                <Logo />
                <div className={`${s.navItems} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
                    <Links1 links={navLinksLeft}/>
                    <Links1 links={navLinksRight}/>
                </div>
                <div className={`${s.navToggle} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
                    <div className={s.bar}></div>
                </div>
            </nav>
            {showOverlay && <div className={s.overlay} onClick={() => {setIsOpen(!isOpen); toggleOverlay;}}></div>}
        </>) :
        (<>
            <nav className={s.navbar}>
                <Location/>
                <div className={`${s.navItems} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
                <Links1 links={navLinksLeft}/>
                </div>
                <Logo />
                <div className={`${s.navItems} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
                    <Links1 links={navLinksRight}/>
                </div>
                <div className={`${s.navToggle} ${isOpen && s.open}`} onClick={()=> setIsOpen(!isOpen)}>
                    <div className={s.bar}></div>
                </div>
                <Call/>
            </nav>
            {showOverlay && <div className={s.overlay} onClick={() => {setIsOpen(!isOpen); toggleOverlay;}}></div>}
        </>)}
    </>
  );
}





 