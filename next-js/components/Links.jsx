import Link from "next/link"
import { useRouter } from 'next/router';
// import { useState } from "react";
import s from '../styles/Links.module.scss';

const navigation = [
    { id: 1, title: 'home', path: '/' },
    { id: 2, title: 'menu', path: '/menu' },
    { id: 3, title: 'gallery', path: '/gallery' },
    { id: 4, title: 'about us', path: '/aboutUs' },
    { id: 5, title: 'payment & delivery', path: '/paymentDelivery' },
    { id: 6, title: 'reviews', path: '/reviews' },
    { id: 7, title: 'contacts', path: '/contacts' },
    //   { id: 8, title: 'Posts', path: '/posts' },
];

export default function Links() {
    const { pathname } = useRouter();

    // const [burgerClass, setBurgerClass] = useState('burger')
    // const [navClass, setNavClass] = useState('nav hide')
    // const [isClick, setIsClick] = useState(false)

    // function IsClick() {
    //     if (!isClick) {
    //         setBurgerClass('burger open')
    //         setNavClass('nav')
    //         setIsClick(true)
    //     } else {
    //         setBurgerClass('burger')
    //         setNavClass('nav hide')
    //         setIsClick(false)
    //     }
    // }

    return (
        <div className={s.links}>
            {navigation.map(({ id, title, path }) => (
            <Link legacyBehavior key={id} href={path}>
                <a className={pathname === path ? s.active : null}>{title}</a>
            </Link>
            ))}
        </div>
    )
}
        // <div className={s.links}>
        //     <div className={navClass}>
        //         <div className={s.modal}>
        //             <div className={s.modalClose} onClick={IsClick}>❌</div>
        //             {navigation.map(({ id, title, path }) => (
        //             <Link legacyBehavior key={id} href={path}>
        //                 <a className={pathname === path ? s.active : null}>{title}</a>
        //             </Link>
        //             ))}
        //             <div className={burgerClass} onClick={IsClick}>
        //                 <div className={s.burgerClose}>❌</div>
        //                 <div className={s.burgerOpen}>=</div>
        //             </div>
        //         </div>
        //     </div>


