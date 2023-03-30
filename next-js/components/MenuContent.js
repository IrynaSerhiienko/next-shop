import { useState, useMemo } from 'react';
import Image from 'next/image';
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
        <aside className=''>
          <ul className={s.menuLists}>
            <li
              className={`${s.menuList} ${selectedCategory === 'all' ? s.active : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              {/* className={`${s.menuList} ${selectedCategory === 'all' ? s.active : ''}`} */}
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

      <div className={s.cardsContainer}>
        <div className={s.cards}>
          {filteredCakes &&
            filteredCakes.map((cake) => (
              <div key={cake.id} className={s.card}>
                <div>
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    width={225}
                    height={100}
                    className={s.img}
                  />
                </div>
                <div className='pr-4 pl-6 '>
                  <strong>{cake.name}</strong>
                  <p className='mt-4'>Price: {cake.price} UAH</p>
                  <div className='flex items-end'>
                    <p className='mb-4 mr-20'>Weight: {cake.weight} kg </p>
                    <button className={s.btnAdd}>
                      <span className={s.iconHolder}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
