import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src='/logo.png' width={60} height={60} alt='_SIA_Shop' />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link legacyBehavior key={id} href={path}>
            <a className={pathname === path ? styles.active : null}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

// import { useRouter } from 'next/router';
// import NextLink from 'next/link';
// import s from '@/styles/Navbar.module.scss';

// const navigation = [
//   { id: 1, title: 'Home', path: '/' },
//   { id: 2, title: 'Posts', path: '/posts' },
//   { id: 3, title: 'Contacts', path: '/contacts' },
// ];

// export default function Navbar() {
//   //   const { pathname } = useRouter;
//   const router = useRouter();

//   return (
//     <nav className={s.nav}>
//       <div className={s.logo}>_SIA_Shop</div>
//       <div className={s.links}>
//         {navigation.map(({ id, title, path }) => (
//           <NextLink key={id} href={path} passHref>
//             <a className={router.pathname === path ? s.active : null}>{title}</a>
//           </NextLink>
//         ))}
//       </div>
//     </nav>
//   );
// }
