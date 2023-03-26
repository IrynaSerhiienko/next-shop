// import Head from 'next/head';
// import Image from 'next/image';
// import { FiShoppingCart } from 'react-icons/fi';

// export default function Menu({ cakes }) {
//   return (
//     <>
//       <Head>
//         <title>Menu</title>
//       </Head>

//       <div>
//         <h1>Торты</h1>
//         <ul>
//           {cakes.map((cake) => (
//             <li key={cake.id}>
//               <div>
//                 <Image src={cake.image} alt={cake.name} width={300} height={300} />
//               </div>
//               <div>
//                 <h2>{cake.name}</h2>
//                 <p>{cake.description}</p>
//                 <p>Цена: {cake.price}</p>
//                 <button onClick={() => handleAddToCart(cake.id)}>
//                   <FiShoppingCart />
//                   Добавить в корзину
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// //   const handleAddToCart = (id) => {
// //     // здесь можно добавить логику добавления товара в корзину
// //     console.log(`Товар с id ${id} добавлен в корзину`);
// //   };
