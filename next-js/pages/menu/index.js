import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import s from '@/styles/Menu.module.scss';
import MenuContent from '../../components/MenuContent';
// import Link from 'next/link';

export const getStaticProps = async (context) => {
  try {
    const response = await axios.get('http://localhost:3000/api/cakes/');
    const cakes = response.data;
    // console.log(cakes);

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

          <div className={s.title}>
            <Image src='/img/main_menu/title.png' width={418} height={68} alt='preview' />
          </div>

          <div className={s.menuSection}>{cakes && <MenuContent cakes={cakes} />}</div>
        </div>
      </section>
    </>
  );
}

// import { FiShoppingCart } from 'react-icons/fi';

//   const handleAddToCart = (id) => {
//     // здесь можно добавить логику добавления товара в корзину
//     console.log(`Товар с id ${id} добавлен в корзину`);
//   };
{
  /* <button onClick={() => handleAddToCart(cake.id)}>
                    <FiShoppingCart />
                    Добавить в корзину
                  </button> */
}
