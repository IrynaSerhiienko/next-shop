// import Link from "next/link"
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useRouter } from 'next/router';
// import s from '../styles/Links.module.scss';

// const navigation = [
//     { id: 1, title: 'home', path: '/' },
//     { id: 2, title: 'menu', path: '/menu' },
//     { id: 3, title: 'gallery', path: '/gallery' },
//     { id: 4, title: 'about us', path: '/aboutUs' },
//     { id: 5, title: 'payment & delivery', path: '/paymentDelivery' },
//     { id: 6, title: 'reviews', path: '/reviews' },
//     { id: 7, title: 'contacts', path: '/contacts' },
//     //   { id: 8, title: 'Posts', path: '/posts' },
// ];

// export default function Links({ isMobile, isMenuOpen, toggleMenu}) {
//     const { pathname } = useRouter();
//     const [showOverlay, setShowOverlay] = useState(false);

//     useEffect(() => {
//         setShowOverlay(isMenuOpen);
//     }, [isMenuOpen] )

//     const toggleOverlay = () => {
//         setShowOverlay(!showOverlay);
//     };

//     return (
//         <>
//             <div className={`${isMobile ? s.linksMobile : s.links} ${isMenuOpen ? s.open : ''}`}>

//             {/* <div className={`${isMobile ? s.linksMobile : s.links}`}
//                 style={{
//                 transform: isMobile && isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
//                 transition: 'transform 0.3s ease-in-out'
//                 }}
//             > */}

//                 {isMenuOpen && (
//                     <>
//                         <button className={s.buttonClose} onClick={toggleMenu}>
//                             <Image
//                                 // className="open"
//                                 alt='burger-menu-close'
//                                 src='/img/burger_menu/menu-close.svg'
//                                 width={28}
//                                 height={10}
//                                 priority={true}
//                                 style={{ width: 'auto'}}
//                             />
//                         </button>
//                         <div className={s.line}></div>
//                     </>
//                 )} 
//                 {navigation.map(({ id, title, path }) => (
//                 <Link legacyBehavior key={id} href={path}>
//                     <a className={pathname === path ? s.active : null}>{title}</a>
//                 </Link>
//                 ))}
//             </div>
//             {showOverlay && <div className={s.overlay} onClick={toggleOverlay}></div>}
//         </>
//     )
// }
        


