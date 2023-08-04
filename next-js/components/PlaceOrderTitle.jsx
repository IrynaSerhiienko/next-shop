import Image from "next/image"
import s from '../styles/PlaceOrderTitle.module.scss';

export default function PlaceOrderTitle({src}) {
  return (
    <div className={s.totalTitleHolder}>
        <div className={s.titleContainer}>
            <Image
            alt='place_order_title'
            src='/img/place_order/yourOrder.svg'
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            />
        </div>
        <div className={s.subTitleContainer}>
            <Image
            alt='place_order_title'
            src={src}
            // src='/img/place_order/step1.svg'
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            />
        </div>
    </div>
  )
}

 
