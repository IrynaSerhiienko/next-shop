import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useData } from '@/contexts/DataContext';
import Head from 'next/head';
import Image from 'next/image';
import PlaceOrderTitle from '@/components/PlaceOrderTitle';
import ButtonArrowBack from '@/components/ButtonArrowBack';
import PlaceOrderFormDecor from '@/components/PlaceOrderFormDecor';

import s from '../../../styles/PlaceOrderStep1.module.scss';

export default function PlaceOrderStep1() {
  const router = useRouter();
  const { query } = router;
  const { setValues } = useData();
  //   const { image } = router.query;

//   useEffect(() => {
//     // Передаем ссылку на изображение через контекст данных
//     setValues({ image: query.image });
//   }, [query.image, setValues]);

  return (
    <div className={s.totalContainer}>
      <Head>
        <title>PlaceOrderStep1</title>
      </Head>
      <div className={s.wrapper}>
        <PlaceOrderTitle src={'/img/place_order/step1.svg'} />
        <ButtonArrowBack text={'back to cake selection'} onClick={() => router.back()} />
        <div className={s.imgContainer}>
          <Image
            className={s.img}
            alt='Cake image'
            src={query.image}
            fill
            priority={true}
            loading='eager'
          />
        </div>
        <PlaceOrderFormDecor image={query.image} />
      </div>
    </div>
  );
}
