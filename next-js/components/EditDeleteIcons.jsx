import Image from 'next/image';
// import Link from 'next/link';
import s from '../styles/EditDeleteIcons.module.scss';

export default function EditDeleteIcons() {
  return (
    <div className={s.editDeleteIconsContainer}>
        {/* <Link href='/'> */}
            <div className={s.icon}>
                <Image
                    alt='editIcon'
                    src='/img/place_order/correctOrder.svg'
                    fill
                />
            </div>
        {/* </Link> */}
        {/* <Link href='/'> */}
            <div className={s.icon}>
                <Image
                    alt='deleteIcon'
                    src='/img/place_order/deleteOrder1.png'
                    // src='/img/place_order/deleteOrder.svg'
                    fill
                />
            </div>
        {/* </Link> */}
    </div> 
  )
}


