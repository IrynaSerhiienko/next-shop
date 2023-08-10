import { useRouter } from 'next/router';
import Head from 'next/head';
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
        <PlaceOrderFormDateTime />
      </div>
    </div>
  );
}
