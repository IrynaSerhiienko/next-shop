import s from '@/styles/Menu.module.scss';

export default function MenuAside() {
  return (
    <div className={s.asideContainer}>
      <aside className=''>
        <ul className={s.menuLists}>
          <li className={s.menuList}>all</li>
          <li className={s.menuList}>fruit</li>
          <li className={s.menuList}>chocolate</li>
          <li className={s.menuList}>peanuts</li>
          <li className={s.menuList}>children's favourites</li>
          <li className={s.menuList}>wedding selection</li>
        </ul>
      </aside>
      <p className={s.menuText}>
        the <b>final price</b> for your individual product is announced after placing the order on
        the website or by phone with the manager
      </p>
      <p className={s.menuText}>
        the price depends on the weight and complexity of the decor you choose
      </p>
      <p className={s.menuText}>
        we recommend calculating <b>200 grams per person</b>
      </p>
      <p className={s.menuText}>
        the minimum order weight is <b>1.5 kg</b>
      </p>
    </div>
  );
}
