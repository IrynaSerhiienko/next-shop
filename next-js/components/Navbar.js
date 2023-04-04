import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import s from '../styles/Navbar.module.scss';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Menu', path: '/menu' },
  { id: 3, title: 'Gallery', path: '/gallery' },
  { id: 4, title: 'About Us', path: '/aboutUs' },
  { id: 5, title: 'Payment & Delivery', path: '/paymentDelivery' },
  { id: 6, title: 'Reviews', path: '/reviews' },
  { id: 7, title: 'Contacts', path: '/contacts' },
  //   { id: 8, title: 'Posts', path: '/posts' },
  //   { id: 9, title: 'Contacts', path: '/contacts' },
];

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <nav className={s.nav}>
      <div className={`${s.logo} flex items-center hover:cursor-pointer`}>
        <div className={`${s.logoIcon}  text-red-600`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-14 h-14'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z'
            />
          </svg>
        </div>
        <div className={`${s.logoText}`}>
          <Image
            src='/img/logo/logo-text_yana_caker.svg'
            width={100}
            height={70}
            alt='logo_yana_caker'
          />
        </div>
      </div>

      <div className={s.links}>
        {navigation.map(({ id, title, path }) => (
          <Link legacyBehavior key={id} href={path}>
            <a className={pathname === path ? s.active : null}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
}

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
