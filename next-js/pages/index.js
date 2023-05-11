import axios from 'axios';
import Content from '@/components/Home';
import Head from 'next/head';

import Heading from '@/components/Heading';
import Socials from '@/components/Socials';
import Hero from '@/components/Hero';
import Menu from './menu';
import MenuHome from '@/components/MenuHome';

import s from '@/styles/Home.module.scss';

export const getStaticProps = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/menu/`);
    // const response = await axios.get('http://localhost:3000/api/cakes/');
    const menu = response.data;
    // console.log(cakes);

    return {
      props: { menu },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};


export default function Home({ socials, menu }) {
  return (
    <div className={s.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Content menu={menu} />

      {/* <Socials socials={socials} /> */}
    </div>
  );
}

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
