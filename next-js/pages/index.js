import axios from 'axios';
import Content from '@/components/Home';
import Head from 'next/head';
import s from '@/styles/Home.module.scss';

export const getStaticProps = async () => {
  try {
    const menuResponse = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/menu/`);
    const menu = menuResponse.data;

    const galleryResponse = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/gallery/`);
    const gallery = galleryResponse.data;

    return {
      props: { menu, gallery },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default function Home({ menu, gallery }) {
  return (
    <div className={s.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Content menu={menu} gallery={gallery} />
    </div>
  );
}
