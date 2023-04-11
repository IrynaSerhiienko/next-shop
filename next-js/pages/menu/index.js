import axios from 'axios';
import Head from 'next/head';
import s from '@/styles/Menu.module.scss';
import MenuContent from '../../components/MenuContent';
import MenuTitle from '@/components/MenuTitle';
// import Link from 'next/link';

export const getStaticProps = async (context) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/cakes/`);
    // const response = await axios.get('http://localhost:3000/api/cakes/');
    const cakes = response.data;

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
      <section className={s.menu}>
        <div className={s.wrapper}>
          <Head>
            <title>Menu</title>
          </Head>

          <MenuTitle />

          <div className={s.menuSection}>{cakes && <MenuContent cakes={cakes} />}</div>
        </div>
      </section>
    </>
  );
}
