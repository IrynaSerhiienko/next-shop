import { useState, useEffect } from 'react';
import Head from 'next/head';
import PlaceOrderTitleSuccess from '@/components/PlaceOrderTitleSuccess';
import LinkArrowTo from '@/components/LinkArrowTo';
import PlaceOrderImageSuccess from '@/components/PlaceOrderImageSuccess';
import s from '@/styles/PlaceOrderStep4.module.scss';

export default function PlaceOrderStep4() {
  const [mobile, setMobile] = useState(undefined);

  const updateMobile = () => {
    setTimeout(() => {
      setMobile(window.innerWidth < 1130 ? true : false);
    }, 300);
  };

  useEffect(() => {
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => {
      window.removeEventListener('resize', updateMobile);
    };
  }, []);

  return typeof mobile !== 'undefined' ? (
    <>
      <Head>
        <title>Success message</title>
      </Head>
      <div className={s.wrapper}>
        <PlaceOrderTitleSuccess />
      </div>
      <div className={s.totalContainer}>
        {mobile ? (
          <PlaceOrderImageSuccess
            src={'/img/place_order/successMessage.png'}
            width={97}
            height={336}
          />
        ) : (
          <PlaceOrderImageSuccess
            src={'/img/place_order/successMessage1.png'}
            width={498}
            height={498}
          />
        )}
        <div className={s.descriptionContainer}>
          <p className={s.text}>
            your order has been accepted! our manager will contact you soon to clarify all the
            details!
          </p>
          <p className={`${s.text} ${s.addStyles}`}>thank you for your trust</p>
          <LinkArrowTo text={'main page'} />
        </div>
      </div>
    </>
  ) : null;
}
