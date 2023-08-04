import Head from 'next/head';
import { useRouter } from 'next/router';
import Button from '../../../components/Button';
import PlaceOrderTitle from '@/components/PlaceOrderTitle';
import ButtonArrowBack from '@/components/ButtonArrowBack';
import PlaceOrderFormDecor from '@/components/PlaceOrderFormDecor';
import s from '../../../styles/PlaceOrderStep1.module.scss';

export default function PlaceOrderStep2() {
  const router = useRouter();
  const { id } = router.query;

  const handlePlaceOrderStep3 = () => {
    router.push(`/menu/${id}/placeOrderStep3`);
  };

  return (
    <div className={s.totalContainer}>
      <Head>
        <title>PlaceOrderStep2</title>
      </Head>
      <div className={s.wrapper}>
        <PlaceOrderTitle src={'/img/place_order/step2.svg'} />
        <ButtonArrowBack text={'back to select decor'} onClick={() => router.back()} />
        {/* <PlaceOrderFormDecor /> */}
        <Button text={'next step'} onClick={handlePlaceOrderStep3} className={s.btnAdd} />
      </div>
    </div>
  );
}


