import Link from 'next/link';
import Image from 'next/image';
import s from '../styles/LinkArrowTo.module.scss';

export default function LinkArrowTo({text}) {
   
  return (
    <div className={s.link}>
        <Link href='/'>
            <span className={s.text}>{text}</span>
            <div className={s.imgContainer}>
                <Image
                alt='arrow_main page'
                src='/img/place_order/arrow_home.svg'
                fill
                priority={true}
                style={{ transform: 'translate3d(0, 0, 0)' }}
                />
            </div>
        </Link>
    </div>
  )
}

