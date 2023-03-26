// import axios from 'axios';
// import Image from 'next/image';
// import { FiShoppingCart } from 'react-icons/fi';

// function Cakes({ cakes }) {
//   const handleAddToCart = (id) => {
//     // здесь можно добавить логику добавления товара в корзину
//     console.log(`Товар с id ${id} добавлен в корзину`);
//   };

//   return (
//     <div>
//       <h1>Торты</h1>
//       <ul>
//         {cakes.map(cake => (
//           <li key={cake.id}>
//             <div>
//               <Image src={cake.image} alt={cake.name} width={300} height={300} />
//             </div>
//             <div>
//               <h2>{cake.name}</h2>
//               <p>{cake.description}</p>
//               <p>Цена: {cake.price}</p>
//               <button onClick={() => handleAddToCart(cake.id)}>
//                 <FiShoppingCart />
//                 Добавить в корзину
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Cakes;

// export async function getStaticProps() {
//   try {
//     const response = await axios.get('https://example.com/api/cakes');
//     const cakes = response.data;
    
//     return {
//       props: {
//         cakes
//       }
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       props: {
//         cakes: []
//       }
//     };
//   }
// }
