import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useData } from '@/contexts/DataContext';
import Head from 'next/head';
import Image from 'next/image';
import PlaceOrderTitle from '@/components/PlaceOrderTitle';
import ButtonArrowBack from '@/components/ButtonArrowBack';
import PlaceOrderFormDecor from '@/components/PlaceOrderFormDecor';
import EditDeleteIcons from '@/components/EditDeleteIcons';
import s from '@/styles/PlaceOrderStep1.module.scss';

export default function PlaceOrderStep1() {
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
  }, []);

  return (
    <>
      <Head>
        <title>PlaceOrderStep1</title>
      </Head>
      <div className={s.wrapper}>
        <PlaceOrderTitle src={'/img/place_order/step1.svg'} />
        <div className={s.arrowImgFormContainer}>
          <div className={s.arrowImgContainer}>
            <ButtonArrowBack text={'back to cake selection'} onClick={() => router.back()} />
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
            </div>
          </div>
          <PlaceOrderFormDecor />
        </div>
      </div>
    </>
  );
}
