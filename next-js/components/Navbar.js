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
        <div className=' text-red-600'>
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
          <svg
            width='100'
            height='70'
            viewBox='0 0 90 45'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.0897 18.7865H5.18351V15.888L7.60791 0H5.56921L5.15596 2.4154L4.10905 11.6744L2.9795 2.4154L2.5387 0H0.5L3.0897 15.888V18.7865Z'
              fill='#CF726D'
            />
            <path
              d='M10.0829 0L7.87889 18.7865H9.91759L10.138 16.8005H13.2236L13.4715 18.7865H15.5102L13.3062 0H10.0829ZM13.0032 14.8681H10.3859L11.6808 2.25438L13.0032 14.8681Z'
              fill='#CF726D'
            />
            <path
              d='M21.5293 16.2637L22.0527 18.7865H25.3863V0H23.2925V2.22754L23.5404 16.2637L20.8681 2.28121L20.3997 0H17.0662V18.7865H19.16V16.3442L18.8845 2.4154L21.5293 16.2637Z'
              fill='#CF726D'
            />
            <path
              d='M29.1312 0L26.9272 18.7865H28.9659L29.1863 16.8005H32.2719L32.5198 18.7865H34.5585L32.3545 0H29.1312ZM32.0515 14.8681H29.4342L30.7291 2.25438L32.0515 14.8681Z'
              fill='#CF726D'
            />
            <path
              d='M17.6086 38.8471C16.1484 40.8063 13.8067 42.0677 11.1068 42.0677C6.61611 42.0677 3.06215 38.5519 3.06215 34.231C3.06215 29.9102 6.61611 26.3944 11.1068 26.3944C13.7516 26.3944 16.0658 27.6021 17.5259 29.4807L19.1238 28.273C17.2504 25.965 14.3577 24.4621 11.1068 24.4621C5.51411 24.4621 0.968351 28.8366 0.968351 34.231C0.968351 39.6254 5.51411 44 11.1068 44C14.4679 44 17.4157 42.4434 19.2616 40.028L17.6086 38.8471Z'
              fill='#CF726D'
            />
            <path
              d='M22.3782 24.8378L20.1742 43.6243H22.2129L22.4333 41.6383H25.5189L25.7668 43.6243H27.8055L25.6015 24.8378H22.3782ZM25.2985 39.7059H22.6812L23.9761 27.0922L25.2985 39.7059Z'
              fill='#CF726D'
            />
            <path
              d='M29.3615 43.6243H31.4553V41.1284L31.3175 35.1167L35.1194 43.6243H37.2959L33.1358 34.3921L37.2959 24.8378H35.147L31.29 33.7211L31.4553 27.0922V24.8378H29.3615V43.6243Z'
              fill='#CF726D'
            />
            <path
              d='M47.3316 42.0677C44.6317 42.0677 42.3451 41.1015 40.8849 39.5449L55.7344 29.5613C53.9987 26.5286 50.6652 24.4621 46.8357 24.4621C41.2431 24.4621 36.6973 28.8366 36.6973 34.231C36.6973 39.6254 40.9951 44 47.3316 44C50.7478 44 53.613 42.6313 55.5966 39.8401L53.9436 38.6593C52.3457 41.021 50.0591 42.0677 47.3316 42.0677ZM38.7911 34.231C38.7911 29.9102 42.3451 26.3944 46.8357 26.3944C49.2601 26.3944 51.4366 27.4411 52.8967 29.0782L39.7278 37.9078C39.1217 36.8075 38.7911 35.5729 38.7911 34.231Z'
              fill='#CF726D'
            />
            <path
              d='M57.2074 43.6243H59.3012V38.0152L63.048 43.6243H65.4725L61.4777 37.6663C63.847 36.5659 65.5 34.2847 65.5 31.6009C65.5 27.8705 62.3317 24.8378 58.4747 24.8378H57.2074V43.6243ZM63.4062 31.6009C63.4062 33.9895 61.643 36.0292 59.3012 36.4317V26.8238C61.643 27.2264 63.4062 29.2124 63.4062 31.6009Z'
              fill='#CF726D'
            />
          </svg>
          {/* <Image src='/img/logo/yana_caker.svg' width={50} height={50} alt='Yana-Caker-shop' /> */}
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
