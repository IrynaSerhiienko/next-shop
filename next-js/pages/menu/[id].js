// import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import CardDetails from '@/components/CardDetails';
import s from '@/styles/Card.module.scss';

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/menu/`);
  const data = await response.json();

  const paths = data.map((cake) => {
    return {
      //params: { id: cake.id },
      params: { id: cake.id.toString() },
    };
  });

  //console.log('paths>>>', paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  //   console.log('context >>>', context);
  //   console.log('context.params >>>', context.params);
  //   console.log('context.params.id >>>', context.params.id);
  let id = context.params.id;
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/menu?id=${id}`);
  const data = await response.json();
  const cake = data.find((cake) => cake.id.toString() === id);

  return {
    props: { cake },
    // props: { cake: data },
  };
};

export default function Details({ cake }) {
  return (
    <div className={s.wrapper}>
      <CardDetails cake={cake} />
    </div>

    // <>
    //   <Head>
    //     <title>Cake</title>
    //   </Head>
    //   <h1>Details</h1>

    //   <div>
    //     <Image
    //       alt={cake.name || 'Cake image'}
    //       className={s.img}
    //       src={cake.image}
    //       width={266}
    //       height={404}
    //       priority={true}
    //       // loading='eager'
    //       // style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
    //     />
    //   </div>
    //   <strong className={s.name}>{cake.name}</strong>
    //   <p className={`${s.price} mt-4`}>Price: {cake.price} UAH</p>
    // </>
  );
}

// export const getStaticProps = async (context) => {
//   try {
//     const { id } = context.params;
//     const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/menu/${id}`);
//     const data = await response.json();
//     // const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/menu/${id}`);
//     // const data = response.data;

//     return {
//       props: { cake: data },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       notFound: true,
//     };
//   }
// };
