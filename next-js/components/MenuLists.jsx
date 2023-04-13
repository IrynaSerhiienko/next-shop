import s from '@/styles/MenuLists.module.scss';

export default function MenuLists({selectedCategory, setSelectedCategory}) {

  return (
    <>
        <ul className={s.menuLists}>
            <li
                className={`${s.menuList} ${selectedCategory === 'all' ? s.active : ''}`}
                onClick={() => setSelectedCategory('all')}>all
            </li>
            <li
                className={`${s.menuList} ${selectedCategory === 'fruit' ? s.active : ''}`}
                onClick={() => setSelectedCategory('fruit')}>fruit
            </li>
            <li
                className={`${s.menuList} ${selectedCategory === 'chocolate' ? s.active : ''}`}
                onClick={() => setSelectedCategory('chocolate')}>chocolate
            </li>
            <li
                className={`${s.menuList} ${selectedCategory === 'peanuts' ? s.active : ''}`}
                onClick={() => setSelectedCategory('peanuts')}>peanuts
            </li>
            <li
                className={`${s.menuList} ${selectedCategory === 'children' ? s.active : ''}`}
                onClick={() => setSelectedCategory('children')}>children&apos;s favourites
            </li>
            <li
                className={`${s.menuList} ${selectedCategory === 'wedding' ? s.active : ''}`}
                onClick={() => setSelectedCategory('wedding')}>wedding selection
            </li>
        </ul>
    </>
  )
}


