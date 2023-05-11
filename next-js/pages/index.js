import axios from 'axios';
import Content from '@/components/Home';
import Head from 'next/head';

import Heading from '@/components/Heading';

import s from '@/styles/Home.module.scss';

export const getStaticProps = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/menu/`);
    const menu = response.data;

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

export default function Home({ menu }) {
  return (
    <div className={s.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Content menu={menu} />
    </div>
  );
}
