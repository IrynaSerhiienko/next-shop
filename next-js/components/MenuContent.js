import { useState, useMemo } from 'react';
import Card from './Card';
import MenuLists from './MenuLists';
import s from '@/styles/Menu.module.scss';

export default function MenuContent({ cakes }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCakes = useMemo(() => {
    if (selectedCategory === 'all') {
      return cakes;
    } else {
      return cakes.filter((cake) =>
        cake.category.toLowerCase().includes(selectedCategory.toLowerCase()),
      );
    }
  }, [cakes, selectedCategory]);

  return (
    <>
      <div className={s.asideContainer}>
        {/* <MenuLists cakes={cakes} /> */}
        <ul className={s.menuLists}>
          <li
            className={`${s.menuList} ${selectedCategory === 'all' ? s.active : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
           
            all
          </li>
          <li
            className={`${s.menuList} ${selectedCategory === 'fruit' ? s.active : ''}`}
            onClick={() => setSelectedCategory('fruit')}
          >
            fruit
          </li>
          <li
            className={`${s.menuList} ${selectedCategory === 'chocolate' ? s.active : ''}`}
            onClick={() => setSelectedCategory('chocolate')}
          >
            chocolate
          </li>
          <li
            className={`${s.menuList} ${selectedCategory === 'peanuts' ? s.active : ''}`}
            onClick={() => setSelectedCategory('peanuts')}
          >
            peanuts
          </li>
          <li
            className={`${s.menuList} ${selectedCategory === 'children' ? s.active : ''}`}
            onClick={() => setSelectedCategory('children')}
          >
            children&apos;s favourites
          </li>
          <li
            className={`${s.menuList} ${selectedCategory === 'wedding' ? s.active : ''}`}
            onClick={() => setSelectedCategory('wedding')}
          >
            wedding selection
          </li>
        </ul>

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
            the minimum order weight is <b>1.5 kg</b>
          </p>
        </div>
      </div>

      <div className={s.cardsContainer}>
        <div className={s.cards}>
          {filteredCakes && filteredCakes.map((cake) => <Card cake={cake} />)}
        </div>
      </div>
    </>
  );
}
