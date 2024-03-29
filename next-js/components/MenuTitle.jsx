import Image from "next/image"
import s from '../styles/MenuTitle.module.scss';

export default function MenuTitle() {
  return (
    <div className={s.totalTitleHolder}>
        <div className={s.titleContainer}>
            <Image
            alt='menu_title'
            src='/img/main_menu/menu_title.svg'
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            />
        </div>
        <div className={s.subTitleContainer}>
            <Image
            alt='menu_subtitle our best combinations'
            src='/img/main_menu/menu_subtitle.svg'
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            />
        </div>
    </div>
  )
}

 
