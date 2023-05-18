import s from '../styles/MenuText.module.scss';

export default function MenuText() {
  return (
    <div className={s.detailsHolder}>
          <p className={s.menuText}>
            the <b>final price</b> for your individual product is announced after placing the order
            on the website or by phone with the manager
          </p>
          <p className={s.menuText}>
            the price depends on the weight and complexity of the decor you choose
          </p>
          <p className={s.menuText}>
            we recommend calculating <b>200 grams per person</b>
          </p>
          <p className={s.menuText}>
            the minimum order weight is <b>1.5kg</b>
          </p>
    </div>
  )
}



// export default function MenuTitle() {
//   return (
//     <div className={s.titleHolder}>
//         <Image
//           alt='menu_title'
//           className={s.title}
//           src='/img/main_menu/menu_title.svg'
//           width={114}
//           height={44}
//           // priority={true}
//         />

//         <Image
//           alt='menu_subtitle our best combinations'
//           className={s.subTitle}
//           src='/img/main_menu/menu_subtitle.svg'
//           width={227}
//           height={24}
//           // priority={true}
//         />
//     </div>
//   )
// }

 
