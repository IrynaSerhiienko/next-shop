import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import PlaceOrderTitle from '@/components/PlaceOrderTitle';
import ButtonArrowBack from '@/components/ButtonArrowBack';
import PlaceOrderFormDecor from '@/components/PlaceOrderFormDecor';
import WeightCost from '@/components/WeightCost';
import EditDeleteIcons from '@/components/EditDeleteIcons';
import PlaceOrderSelectedImage from '@/components/PlaceOrderSelectedImage';
import PlaceOrderSelectedCakeName from '@/components/PlaceOrderSelectedCakeName';

import s from '@/styles/PlaceOrderStep1.module.scss';

export default function PlaceOrderStep1() {
  const [mobile, setMobile] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    let timeout;

    const updateMobile = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setMobile(window.innerWidth < 1130 ? true : false);
      }, 500);
    };
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => {
      window.removeEventListener('resize', updateMobile);
    };
    clearTimeout(timeout);
  }, []);

  return typeof mobile != undefined ? (
    <>
      <Head>
        <title>PlaceOrderStep1</title>
      </Head>
      <div className={s.wrapper}>
        <PlaceOrderTitle src={'/img/place_order/step1.svg'} />
        <div className={s.arrowImgFormContainer}>
          <div className={s.arrowImgContainer}>
            <ButtonArrowBack text={'back to cake selection'} onClick={() => router.back()} />
            {mobile ? (
              <PlaceOrderSelectedImage />
            ) : (
              <div className={s.imgEditingContainer}>
                <PlaceOrderSelectedImage />
                <div className={s.editingContainer}>
                  <PlaceOrderSelectedCakeName />
                  <WeightCost />
                  <EditDeleteIcons />
                </div>
              </div>
            )}
          </div>
          <PlaceOrderFormDecor />
        </div>
      </div>
    </>
  ) : null;
}
