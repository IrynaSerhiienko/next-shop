import Image from "next/image"
import s from '@/styles/Card.module.scss';


export default function Card({cake}) {
  return (
    <div className={s.card}>
        <div className={s.imgContainer}>
            <Image
                alt={cake.name || 'Cake image'}
                className={s.img}
                src={cake.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // width={266}
                // height={404}
                priority={true}
                // loading='eager'
                // style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
            />
        </div>
            

        <div className={`${s.aboutHolder} pr-2 pl-3 pb-2 pt-3 relative` }>
            <div className={s.name}><b>{cake.name}</b></div>
            <p className={`${s.price} `}>Price: {cake.price} UAH</p>
            {/* <p className={`${s.price} mt-4`}>Price: {cake.price} UAH</p> */}
            
            {/* <div className={`${s.weightBtnHolder}`}> */}
                <p className={`${s.weight}`}>Weight: {cake.weight} kg </p>
                <button className={s.btnAdd}>
                    {/* <div className={s.iconHolder}>  */}
                        <Image
                                alt='btnAdd-icon'
                                src='/img/card/plus.svg'
                                width={34}
                                height={34}
                                // style={{ transform: 'translate3d(0, 0, 0)'}}
                            />
                    {/* </div> */}
                </button>
            {/* </div> */}
        </div>
    </div>
  )
}


