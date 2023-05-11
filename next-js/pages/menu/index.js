import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import MenuContent from '../../components/MenuContent';
import MenuTitle from '@/components/MenuTitle';
import CardDetails from '@/components/CardDetails';

import s from '@/styles/Menu.module.scss';

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/menu/`);
  const data = await response.json();

  return {
    props: { menu: data },
  };
};
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

export default function Menu({ menu }) {
  return (
    <>
      <section className={s.menu}>
        <div className={s.wrapper}>
          <Head>
            <title>Menu</title>
          </Head>
          <MenuTitle />
          {/* <ul>
            {menu &&
              menu.map(({ id, name }) => (
                <li key={id}>
                  <Link href={`/menu/${id}`}>{name}</Link>
                </li>
              ))}
          </ul> */}

          <div className={s.menuSection}>{menu && <MenuContent menu={menu} />}</div>
        </div>
      </section>
    </>
  );
}
