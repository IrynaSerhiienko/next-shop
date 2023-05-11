import axios from 'axios';
import Head from 'next/head';
import MenuContent from '../../components/MenuContent';
import MenuTitle from '@/components/MenuTitle';

import s from '@/styles/Menu.module.scss';

export const getStaticProps = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/menu/`);
    const data = response.data;

    return {
      props: { menu: data },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default function Menu({ menu }) {
  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>
      <section className={s.menu}>
        <div className={s.wrapper}>
          <MenuTitle />
          <div className={s.menuSection}>{menu && <MenuContent menu={menu} />}</div>
        </div>
      </section>
    </>
  );
}

// export const getStaticProps = async () => {
//   try {
//     const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/menu/`);
//     // const response = await axios.get('http://localhost:3000/api/cakes/');
//     const menu = response.data;

//     return {
//       props: { menu },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       notFound: true,
//     };
//   }
// };
