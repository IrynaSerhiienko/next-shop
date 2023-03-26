import axios from 'axios';
import Head from 'next/head';
import s from '@/styles/Home.module.scss';
import Heading from '@/components/Heading';
import Socials from '@/components/Socials';
import Hero from '@/components/Hero';
// import Main from '@/components/Main';

export const getStaticProps = async () => {
  try {
    const response = await axios.get('https://buy-cakes.herokuapp.com/api/cakes');
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
      <Hero />
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
