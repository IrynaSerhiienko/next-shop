import { useRouter } from "next/router";
import { useData } from "@/contexts/DataContext";
import Head from "next/head";
import Image from "next/image"
import ButtonArrowBack from "./ButtonArrowBack";
import SelectWithOptions from "./SelectWithOptions";
import Button from "./Button";
import PlaceOrderFormChoseWeight from "./PlaceOrderFormChoseWeight";
import s from '@/styles/CardDetails.module.scss';


export default function CardDetails({cake}) {
    const router = useRouter()
    const {setValues} = useData()

    
    // const handlePlaceOrderStep1 = (e) => {
    //     router.push({
    //         pathname: `/menu/${cake.id}/placeOrderStep1`,
    //     })
    //     localStorage.setItem('selectedImage', cake.image)
    //     setValues({ selectedImage: cake.image });
    // }

  return (
    <div className={s.totalContainer}>
        <Head>
            <title>CardDetails</title>
        </Head>
    {/* <div className={s.wrapper}> */}
        <h3 className={s.title}>{cake.name}</h3>
        <ButtonArrowBack text={'back to menu'} onClick={() => router.back()}/>
        <div className={s.imgDescriptionContainer}>
            <div className={s.imgContainer}>
                    <Image
                        className={s.img}
                        alt={cake.name || 'Cake image'}
                        src={cake.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                        priority={true}
                        loading='eager'
                    />
            </div>
        <div className={s.descriptionContainer}>
                <p className={s.description}>{cake.description}</p>
                <p className={s.price}><strong>{cake.price} UAH per 1 kg</strong></p>
                {/* <p  className={s.weight}><strong>chose the weight</strong></p> */}
                <PlaceOrderFormChoseWeight cake={cake}/>
       {/* <SelectWithOptions/>
       <Button text={'order'} onClick={handlePlaceOrderStep1}/> */}
        </div>
       </div>
    </div>
 ) 
}

