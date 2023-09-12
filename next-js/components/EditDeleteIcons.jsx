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
            <div className={s.iconLine}>
                    <Image
                        alt='lineIcon'
                        src='/img/place_order/line.svg'
                        fill
                    />
            </div>
        {/* <Link href='/'> */}
            <div className={s.deleteIconContainer}>
                <Image
                    className={s.deleteIcon}
                    alt='deleteIcon'
                    // src='/img/place_order/deleteOrder.svg'
                    src='/img/place_order/trash-can-regular.svg'
                    fill
                />
            </div>
        {/* </Link> */}
    </div> 
  )
}


