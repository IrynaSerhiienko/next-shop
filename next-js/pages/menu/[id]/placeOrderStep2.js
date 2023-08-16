import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import PlaceOrderTitle from '@/components/PlaceOrderTitle';
import ButtonArrowBack from '@/components/ButtonArrowBack';
import PlaceOrderFormDateTime from '@/components/PlaceOrderFormDateTime';
import s from '../../../styles/PlaceOrderStep1.module.scss';

export default function PlaceOrderStep2() {
  const router = useRouter();

  return (
    <div className={s.totalContainer}>
      <Head>
        <title>PlaceOrderStep2</title>
      </Head>
      <div className={s.wrapper}>
        <PlaceOrderTitle src={'/img/place_order/step2.svg'} />
        <ButtonArrowBack text={'back to select decor'} onClick={() => router.back()} />
        <div className={s.imgContainer}>
          <Image
            className={s.img}
            alt='Cake image'
            src='/img/menu_all/image1.png'
            fill
            priority={true}
            loading='eager'
            // src={cake.image}
            // alt={cake.name || 'Cake image'}
          />
        </div>
        <PlaceOrderFormDateTime />
      </div>
    </div>
  );
}
