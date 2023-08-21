import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useData } from '@/contexts/DataContext';
import Head from 'next/head';
import Image from 'next/image';
import PlaceOrderTitle from '@/components/PlaceOrderTitle';
import ButtonArrowBack from '@/components/ButtonArrowBack';

import s from '@/styles/PlaceOrderStep3.module.scss';
import PlaceOrderFormContact from '@/components/PlaceOrderFormContact';

export default function PlaceOrderStep3() {
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
        <title>PlaceOrderStep3</title>
      </Head>
      <div className={s.wrapper}>
        <PlaceOrderTitle src={'/img/place_order/step3.svg'} />
        <ButtonArrowBack text={'back to select date&time'} onClick={() => router.back()} />
        <div className={s.imgContainer}>
          <Image
            alt='Cake image'
            src={formData.selectedImage}
            fill
            priority={true}
            loading='eager'
          />
        </div>
        <PlaceOrderFormContact />
      </div>
    </>
  );
}
