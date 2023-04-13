import Link from "next/link"
import { useRouter } from 'next/router';
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

