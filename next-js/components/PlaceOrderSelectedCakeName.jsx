import { useEffect } from "react";
import { useData } from "@/contexts/DataContext";

import s from '@/styles/PlaceOrderSelectedCakeName.module.scss';



export default function PlaceOrderSelectedCakeName() {
    const { formData, setValues } = useData();

    useEffect(() => {
        const savedName = localStorage.getItem('selectedName');

        if (savedName) {
            setValues({ selectedName: savedName });
        }
    }, [])


  return (
    <div className={s.nameContainer}>{formData.selectedName}</div>
  )
}


  

 


