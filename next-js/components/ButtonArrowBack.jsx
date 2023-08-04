import Image from 'next/image';
import s from '../styles/ButtonArrowBack.module.scss';

export default function ButtonArrowBack({text, onClick}) {
   
  return (
    <button onClick={onClick} >
        <div className={s.arrowContainer}>
            <span className={s.arrowText}>{text}</span>
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
    </button>
  )
}

