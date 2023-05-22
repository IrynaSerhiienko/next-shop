import Image from "next/image"
import s from '../styles/GalleryTitle.module.scss';

export default function GalleryTitle() {
  return (
    <div className={s.totalTitleHolder}>
        <div className={s.titleContainer}>
            <Image
            alt='gallery_title'
            src='/img/main_gallery/gallery_title.svg'
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            />
        </div>
        <div className={s.subTitleContainer}>
            <Image
            alt='gallery_subtitle  our exquisite designs'
            src='/img/main_gallery/gallery_subtitle.svg'
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            />
        </div>
    </div>
  )
}

 
