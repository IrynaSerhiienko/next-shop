import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useData } from '@/contexts/DataContext';
import Head from 'next/head';
import Image from 'next/image';
import PlaceOrderTitle from '@/components/PlaceOrderTitle';
import ButtonArrowBack from '@/components/ButtonArrowBack';
import PlaceOrderFormDecor from '@/components/PlaceOrderFormDecor';
import WeightCost from '@/components/WeightCost';
import EditDeleteIcons from '@/components/EditDeleteIcons';

import s from '@/styles/PlaceOrderStep1.module.scss';

export default function PlaceOrderStep1() {
  const [mobile, setMobile] = useState(undefined);
  const router = useRouter();
  const { formData, setValues } = useData();
  console.log(formData);

  useEffect(() => {
    const savedImage = localStorage.getItem('selectedImage');
    const savedName = localStorage.getItem('selectedName');
    const savedWeight = localStorage.getItem('weight');

    if (savedImage) {
      setValues({ selectedImage: savedImage });
    }
    if (savedName) {
      setValues({ selectedName: savedName });
    }
    if (savedWeight) {
      setValues({ selectedWeight: savedWeight });
    }

    const updateMobile = () => {
      setMobile(window.innerWidth < 1130 ? true : false);
    };
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => {
      window.removeEventListener('resize', updateMobile);
    };
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
              <div className={s.imgContainer}>
                <Image
                  alt='Cake image'
                  src={formData.selectedImage}
                  fill
                  priority={true}
                  loading='eager'
                />
              </div>
            ) : (
              <div className={s.imgEditingContainer}>
                <div className={s.imgContainer}>
                  <Image
                    alt='Cake image'
                    src={formData.selectedImage}
                    fill
                    priority={true}
                    loading='eager'
                  />
                </div>
                <div className={s.editingContainer}>
                  <div className={`${s.nameContainer}`}>{formData.selectedName}</div>
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

{
  /* <div className={`${s.weightCostContainer} flex justify-between`}>
                    <div className={s.weightContainer}>{formData.selectedWeight}</div>
                    <div className={`${s.costContainer} flex`}>
                      <div className={`${s.cost} mr-1`}>
                        {formData.selectedWeight &&
                          parseFloat(formData.selectedWeight.replace(',', '.').replace(' kg', '')) *
                            800}
                      </div>
                      <div className={s.currency}>UAH</div>
                    </div>
                  </div> */
}

{
  /* <div className={s.imgEditingContainer}>
              <div className={s.imgContainer}>
                <Image
                  alt='Cake image'
                  src={formData.selectedImage}
                  fill
                  priority={true}
                  loading='eager'
                />
              </div>
              <div className={s.editingContainer}>
                <div className={`${s.nameContainer}`}>{formData.selectedName}</div>
                <div className={`${s.weightCostContainer} flex justify-between`}>
                  <div className={s.weightContainer}>{formData.selectedWeight}</div>
                  <div className={`${s.costContainer} flex`}>
                    <div className={`${s.cost} mr-1`}>
                      {formData.selectedWeight &&
                        parseFloat(formData.selectedWeight.replace(',', '.').replace(' kg', '')) *
                          800}
                    </div>
                    <div className={s.currency}>UAH</div>
                  </div>
                </div>
                <EditDeleteIcons />
              </div>
            </div> */
}
