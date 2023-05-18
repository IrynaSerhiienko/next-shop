// import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuTitle from './MenuTitle';
import SwiperJSAllCakes from './SwiperJSAllCakes';
import s from '../styles/MenuHome.module.scss';
// import s from '@/styles/MenuHome.module.scss';

export default function MenuHome({ menu }) {
  return (
    <section className={s.menuContainer}>
      <MenuTitle />
      <div className={s.swiperContainer}>
        <SwiperJSAllCakes menu={menu} />
        <div className={s.link}>
            <Link href='/menu'>
                <span className={s.text}>more</span>
                {/* <span className='block text-black text-2xl'>more</span> */}
                <div className={s.imgContainer}>
                    <Image
                        alt='arrow_more'
                        src='/img/main_menu/arrow_more.svg'
                        fill
                        // width={324}
                        // height={1}
                        priority={true}
                        style={{ transform: 'translate3d(0, 0, 0)'}}
                    />
                </div>
            </Link>
        </div>
      </div>
     
    </section>
  );
}

//   const [mobile, setMobile] = useState(undefined);

//   useEffect(() => {
//     const updateMobile = () => {
//       setMobile(window.innerWidth < 1130 ? true : false);
//     };

//     updateMobile();
//     window.addEventListener('resize', updateMobile);
//     return () => {
//       window.removeEventListener('resize', updateMobile);
//     };
//   }, []);

//   return typeof mobile !== 'undefined' ? (
//     mobile ? (
//       <section className={s.menuContainer}>
//         <MenuTitle />
//         <SwiperJSAllCakes menu={menu} />
//         <div className={s.link}>
//           <Link href='/menu'>
//             <span className='block text-black text-2xl'>more</span>
//             <Image
//               alt='arrow_more'
//               src='/img/main_menu/arrow_more.svg'
//               width={324}
//               height={1}
//               priority={true}
//               style={{ transform: 'translate3d(0, 0, 0)', width: 'auto' }}
//             />
//           </Link>
//         </div>
//       </section>
//     ) : (
//       <section className={s.menuContainer}>
//         <MenuTitle />
//         {/* <SwiperJSAllCakes menu={menu} /> */}
//         <div className={s.link}>
//           <Link href='/menu'>
//             <span className='block text-black text-2xl'>more</span>
//             <Image
//               alt='arrow_more'
//               src='/img/main_menu/arrow_more.svg'
//               width={324}
//               height={1}
//               priority={true}
//               style={{ transform: 'translate3d(0, 0, 0)', width: 'auto' }}
//             />
//           </Link>
//         </div>
//       </section>
//     )
//   ) : null;
// }
