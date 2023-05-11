// import { useState, useMemo, useEffect } from 'react';
// import { useDebounce } from 'use-debounce';

// import MenuLists from './MenuLists';
// import SwiperJS from './SwiperJS';
// import MenuText from './MenuText';
// import Card from './Card';

// import s from '@/styles/Menu.module.scss';

// export default function MenuContent1({ cakes }) {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [isMobile, setIsMobile] = useState(
//     typeof window !== 'undefined' ? window.innerWidth < 767 : false,
//   );

//   const debouncedIsMobile = useDebounce(isMobile, 500);

//   const filteredCakes = useMemo(() => {
//     if (selectedCategory === 'all') {
//       return cakes;
//     } else {
//       return cakes.filter((cake) =>
//         cake.category.toLowerCase().includes(selectedCategory.toLowerCase()),
//       );
//     }
//   }, [cakes, selectedCategory, debouncedIsMobile]);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 767);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <>
//       {debouncedIsMobile[0] ? (
//         <div className={s.container}>
//           <MenuLists
//             selectedCategory={selectedCategory}
//             setSelectedCategory={setSelectedCategory}
//           />
//           <SwiperJS filteredCakes={filteredCakes} />
//           <MenuText />
//         </div>
//       ) : (
//         <>
//           <div className={s.container}>
//             <MenuLists
//               selectedCategory={selectedCategory}
//               setSelectedCategory={setSelectedCategory}
//             />
//             <MenuText />
//           </div>

//           <div className={s.cards}>
//             {filteredCakes && filteredCakes.map((cake) => <Card cake={cake} key={cake.id} />)}
//           </div>
//         </>
//       )}
//     </>
//   );
// }
