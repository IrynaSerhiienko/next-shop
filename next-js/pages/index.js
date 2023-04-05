import axios from 'axios';
import Head from 'next/head';
import s from '@/styles/Home.module.scss';
import Heading from '@/components/Heading';
import Socials from '@/components/Socials';
import Content from '@/components/Content';
import Hero from '@/components/Hero';
import Menu from './menu';
import MenuHome from '@/components/MenuHome';

export const getStaticProps = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/cakes/`);
    // const response = await axios.get('http://localhost:3000/api/cakes/');
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
      <Content cakes={cakes} />
      {/* <Socials socials={socials} /> */}
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
