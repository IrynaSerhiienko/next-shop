import Links from './Links';
import dynamic from 'next/dynamic';
import s from '../styles/BurgerMenu.module.scss';
import Image from 'next/image';

const Navbar = dynamic(() => import('./Navbar'), { ssr: false });


export default function BurgerMenu({isMenuOpen, toggleMenu, isMobile}) {

return (

    <div className={s.burgerMenu}>
        <button className={s.button} onClick={toggleMenu}>
            {isMenuOpen ? (<Links isMobile={isMobile} isMenuOpen={isMenuOpen}/>) : (<Image
            alt='burger-menu-open'
            src='/img/burger_menu/menu-open.svg'
            width={28}
            height={10}
            priority={true}
            style={{ width: 'auto'}}
        />)}
        </button>
    </div>

    // <div className={s.burgerMenu}>
    //         <button className={s.button} onClick={toggleMenu}>
    //             {isMenuOpen ? (<Image
    //             alt='burger-menu-close'
    //             className={s.buttonClose}
    //             src='/img/burger_menu/menu-close.svg'
    //             width={28}
    //             height={10}
    //             priority={true}
    //             style={{ width: 'auto'}}
    //         />) : (<Image
    //             alt='burger-menu-open'
    //             src='/img/burger_menu/menu-open.svg'
    //             width={28}
    //             height={10}
    //             priority={true}
    //             style={{ width: 'auto'}}
    //         />)}
    //         </button>
    //         {/* <Links isMobile={isMobile} isMenuOpen={isMenuOpen}/> */}
    //         {isMenuOpen && <Links isMobile={isMobile} isMenuOpen={isMenuOpen}/>}
    // </div>
  );
};