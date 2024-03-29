import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useData } from '@/contexts/DataContext';
import Head from 'next/head';
import Image from 'next/image';
import PlaceOrderTitle from '@/components/PlaceOrderTitle';
import ButtonArrowBack from '@/components/ButtonArrowBack';
import PlaceOrderFormDateTime from '@/components/PlaceOrderFormDateTime';
import s from '@/styles/PlaceOrderStep2.module.scss';

export default function PlaceOrderStep2() {
  const router = useRouter();
  const { formData, setValues } = useData();

  useEffect(() => {
    const savedImage = localStorage.getItem('selectedImage');
    if (savedImage) {
      setValues({ selectedImage: savedImage });
    }
  }, []);

  return (
    <>
      <Head>
        <title>PlaceOrderStep2</title>
      </Head>
      <div className={s.wrapper}>
        <PlaceOrderTitle src={'/img/place_order/step2.svg'} />
        <ButtonArrowBack text={'back to select decor'} onClick={() => router.back()} />
        <div className={s.imgContainer}>
          <Image
            alt='Cake image'
            src={formData.selectedImage}
            fill
            priority={true}
            loading='eager'
          />
        </div>
        <PlaceOrderFormDateTime />
      </div>
    </>
  );
}
