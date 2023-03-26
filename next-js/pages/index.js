import axios from 'axios';
import Head from 'next/head';
import s from '@/styles/Home.module.scss';
import Heading from '@/components/Heading';
import Socials from '@/components/Socials';
import Content from '@/components/Content';
import Hero from '@/components/Hero';
// import Menu from '@/components/Menu';

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

// export const getStaticProps = async () => {
//   try {
//     const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/socials/`);
//     // const response = await axios.get(`${process.env.API_HOST}/socials/`);
//     const socials = response.data;

//     return {
//       props: { socials },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       notFound: true,
//     };
//   }
// };

export default function Home({ socials, cakes }) {
  return (
    <div className={s.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      {/* <Content /> */}
      <Hero />
      {/* <Menu /> */}
      <div className='flex mb-2 bg-slate-400'>
        <ul>
         {cakes && cakes.map((cake) => (
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

      <h1 className='text-3xl font-bold bg-red-700'>Test Tailwind</h1>
      {/* <Main main={main}/> */}
      {/* <Heading text='Hello Next.js' /> */}
      {/* <Socials socials={socials} /> */}
      {/* <Cakes cakes={cakes} /> */}
    </div>
  );
}

// export const getStaticProps = async () => {
//   try {
//     const response = await fetch(`${process.env.API_HOST}/socials/`);
//     const data = await response.json();

//     if (!data) {
//       return {
//         notFound: true,
//       };
//     }

//     return {
//       props: { socials: data },
//     };
//   } catch {
//     return {
//       props: { socials: null },
//     };
//   }
// };
