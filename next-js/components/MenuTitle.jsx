import Image from "next/image"
import s from '../styles/MenuTitle.module.scss';

export default function MenuTitle() {
  return (
    <div className={s.titleHolder}>
        <Image
          alt='menu_title'
          className={s.title}
          src='/img/main_menu/menu_title.svg'
          width={114}
          height={44}
          // priority={true}
        />

        <Image
          alt='menu_subtitle our best combinations'
          className={s.subTitle}
          src='/img/main_menu/menu_subtitle.svg'
          width={227}
          height={24}
          // priority={true}
        />
    </div>
  )
}

 
