import Link from "next/link"
import { useRouter } from 'next/router';
import s from '../styles/Navbar1.module.scss';

export default function Links1({links}) {
    const { pathname } = useRouter();

    return (
        <>
            {links.map(({ id, title, path }) => (
                <Link legacyBehavior key={id} href={path}>
                    <a className={pathname === path ? s.active : null}>{title}</a>
                </Link>
            ))}
        </>
    )
}
        


