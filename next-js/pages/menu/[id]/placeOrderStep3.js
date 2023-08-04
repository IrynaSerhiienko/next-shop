import Head from 'next/head';
import { useRouter } from 'next/router';
import Button from '../../../components/Button';
import PlaceOrderTitle from '@/components/PlaceOrderTitle';
import ButtonArrowBack from '@/components/ButtonArrowBack';
import PlaceOrderFormDecor from '@/components/PlaceOrderFormDecor';
import s from '../../../styles/PlaceOrderStep1.module.scss';

export default function PlaceOrderStep3() {
  const router = useRouter();
  //   const { id } = router.query;

  //   const handlePlaceOrderStep3 = () => {
  //     router.push(`/menu/${id}/placeOrderStep3`);
  //   };

  return (
    <div className={s.totalContainer}>
      <Head>
        <title>PlaceOrderStep3</title>
      </Head>
      <div className={s.wrapper}>
        <PlaceOrderTitle src={'/img/place_order/step3.svg'} />
        <ButtonArrowBack text={'back to select date&time'} onClick={() => router.back()} />
        {/* <PlaceOrderFormDecor /> */}
        <Button text={'place order'} className={s.btnAdd} />
        {/* <Button text={'place order'} onClick={handlePlaceOrderStep3} className={s.btnAdd} /> */}
      </div>
    </div>
  );
}
