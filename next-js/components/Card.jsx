import Image from "next/image"
import s from '@/styles/Card.module.scss';

export default function Card({cake}) {
  return (
    <div className={s.card}>
        <Image
            alt={cake.name || 'Cake image'}
            className={s.img}
            src={cake.image}
            width={266}
            height={404}
            priority={true}
            // loading='eager'
            // style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
        />

        <div className={`${s.aboutHolder} pr-4 pl-6` }>
            <strong className={s.name}>{cake.name}</strong>
            <p className={`${s.price} mt-4`}>Price: {cake.price} UAH</p>
            
            <div className={`${s.weightBtnHolder} flex items-end`}>
                <p className={`${s.weight} mb-4 mr-20`}>Weight: {cake.weight} kg </p>
                <button className={s.btnAdd}>
                    <span className={s.iconHolder}>
                        <Image
                            alt='btnAdd-icon'
                            src='/img/card/btnAdd.svg'
                            width={24}
                            height={24}
                            // style={{ transform: 'translate3d(0, 0, 0)'}}
                        />
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}


