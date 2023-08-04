import Head from 'next/head';
import { useRouter } from 'next/router';
import Button from '../../../components/Button';
import PlaceOrderTitle from '@/components/PlaceOrderTitle';
import ButtonArrowBack from '@/components/ButtonArrowBack';
import PlaceOrderFormDecor from '@/components/PlaceOrderFormDecor';
import s from '../../../styles/PlaceOrderStep1.module.scss';

export default function PlaceOrderStep1() {
  const router = useRouter();
  const { id } = router.query;

  const handlePlaceOrderStep2 = () => {
    router.push(`/menu/${id}/placeOrderStep2`);
  };

  return (
    <div className={s.totalContainer}>
      <Head>
        <title>PlaceOrderStep1</title>
      </Head>
      <div className={s.wrapper}>
        <PlaceOrderTitle src={'/img/place_order/step1.svg'} />
        <ButtonArrowBack text={'back to cake selection'} onClick={() => router.back()} />
        <PlaceOrderFormDecor />
        <Button text={'next step'} onClick={handlePlaceOrderStep2} className={s.btnAdd} />
      </div>
    </div>
  );
}

{
  /* <div className={s.imgContainer}>
          <Image
            className={s.img}
            alt='Cake image'
            // alt={cake.name || 'Cake image'}
            src='/img/menu_all/image1.png'
            // src={cake.image}
            fill
            priority={true}
            loading='eager'
          />
        </div> */
}
