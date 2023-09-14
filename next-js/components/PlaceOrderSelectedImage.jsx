import { useEffect } from "react";
import { useData } from "@/contexts/DataContext";
import Image from "next/image";

// import s from '@/styles/PlaceOrderSelectedImage.module.scss';
import s from '../styles/PlaceOrderSelectedImage.module.scss';


export default function PlaceOrderSelectedImage() {
    const { formData, setValues } = useData();

    useEffect(() => {
        const savedImage = localStorage.getItem('selectedImage');

        if (savedImage) {
            setValues({ selectedImage: savedImage });
        }
    }, [])


  return (
    <div className={s.imgContainer}>
        <Image
            alt='Cake image'
            src={formData.selectedImage}
            fill
            priority={true}
            loading='eager'
        />
    </div>
  )
}

 


