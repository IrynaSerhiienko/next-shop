import Image from "next/image";
import s from '../styles/PlaceOrderImageSuccess.module.scss';

export default function PlaceOrderImageSuccess({src, width, height})  {

    return (
        <div className={s.imgContainer} style={{ width, height }}>
          <Image
            alt='Cake image'
            src={src}
            priority={true}
            loading='eager'
            fill
          />
        </div>
    )
} 