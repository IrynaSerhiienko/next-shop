import Image from "next/image"
import Link from "next/link";
import SelectWithOptions from "./SelectWithOptions";
import Button from "./Button";

import s from '@/styles/CardDetails.module.scss';
// import s from '@/styles/Card.module.scss';


export default function CardDetails({cake}) {
  return (
    <div className={s.totalContainer}>
    {/* <div className={s.wrapper}> */}
        <h3 className={s.title}>{cake.name}</h3>
        <Link href={'/menu'} >
            <div className={s.arrowContainer}>
                <span className={s.arrowText}>back to menu</span>
                <div className={s.arrow}>
                    <Image
                        alt='arrow'
                        src='/img/card_details/arrow.svg'
                        fill
                        priority={true}
                        loading='eager'
                    />
                </div>
            </div>
        </Link>
       <div className={s.imgDescriptionContainer}>
        <div className={s.imgContainer}>
                <Image
                    className={s.img}
                    alt={cake.name || 'Cake image'}
                    src={cake.image}
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
                <Button text="order"/>
                {/* <Button text="order" width={171} height={52} color='$mainOrange' /> */}
                {/* <button className={s.btn}>order</button> */}
        </div>
       </div>
       
       
    </div>
 )
}
 


