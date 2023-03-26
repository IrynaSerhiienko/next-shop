import Head from 'next/head';
import Image from 'next/image';
// import { FiShoppingCart } from 'react-icons/fi';

export const getStaticProps = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/cakes/');
    const cakes = response.data;
    console.log(cakes);

    return {
      props: { cakes },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default function Menu({ cakes }) {
  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>
      <h1>Menu!</h1>

      <div className='flex mb-2 bg-slate-400'>
        <ul>
          {cakes &&
            cakes.map((cake) => (
              <li key={cake.id}>
                <div>
                  <img src={cake.image} alt={cake.name} width={300} height={300} />
                </div>
                <div>
                  <h2>{cake.name}</h2>
                  <p>{cake.description}</p>
                  <p>Цена: {cake.price}</p>
                  {/* <button onClick={() => handleAddToCart(cake.id)}>
                  <FiShoppingCart />
                  Добавить в корзину
                </button> */}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

//   const handleAddToCart = (id) => {
//     // здесь можно добавить логику добавления товара в корзину
//     console.log(`Товар с id ${id} добавлен в корзину`);
//   };
