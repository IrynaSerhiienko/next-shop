import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image"
import ButtonArrowBack from "./ButtonArrowBack";
import SelectWithOptions from "./SelectWithOptions";
import Button from "./Button";
import s from '@/styles/CardDetails.module.scss';


export default function CardDetails({cake}) {
    
    const router = useRouter()
    
    const handlePlaceOrderStep1 = (e) => {
        // router.push(`/menu/${cake.id}/placeOrderStep1`)
        router.push({
            pathname: `/menu/${cake.id}/placeOrderStep1`,
            query: {image: cake.image}  
        })
    }

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
                <p  className={s.weight}><strong>chose the weight</strong></p>
                <SelectWithOptions/>
                <Button text={'order'} onClick={handlePlaceOrderStep1}/>
        </div>
       </div>
    </div>
 )
}

{/* <Button text="order" width={171} height={52} color='$mainOrange' /> */}
{/* <button className={s.btn}>order</button> */}


