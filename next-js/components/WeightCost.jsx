import { useEffect } from 'react';
import { useData } from '@/contexts/DataContext';

import s from '../styles/WeightCost.module.scss';


export default function WeightCost() {
    const { formData, setValues } = useData();

    useEffect(() => {
        const savedWeight = localStorage.getItem('weight');

    if (savedWeight) {
      setValues({ selectedWeight: savedWeight });
    }
    }, [])

  return (
    <div className={`${s.weightCostContainer} flex justify-between`}>
        <div>{formData.selectedWeight}</div>
        {/* <div className={s.weightContainer}>{formData.selectedWeight}</div> */}
        <div className={`flex`}>
        {/* <div className={`${s.costContainer} flex`}> */}
            <div className={`mr-1`}>
            {/* <div className={`${s.cost} mr-1`}> */}
                {formData.selectedWeight && parseFloat(formData.selectedWeight.replace(',', '.').replace(' kg', '')) * 800}
            </div>
            <div>UAH</div>
            {/* <div className={s.currency}>UAH</div> */}
        </div>
    </div>
  )
}
