import { useState, useMemo, useEffect } from 'react';
import MenuLists from './MenuLists';
import SwiperJS from './SwiperJS';
import MenuText from './MenuText';
import Card from './Card';

import s from '@/styles/Menu.module.scss';

export default function MenuContent({ menu }) {
  const [mobile, setMobile] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
      const updateMobile = () => {
        setMobile(window.innerWidth < 1130 ? true : false);
      };

      updateMobile();
      window.addEventListener('resize', updateMobile);
      return () => {
        window.removeEventListener('resize', updateMobile);
      };
    }, []);

    const filteredCakes = useMemo (() => {
        if (selectedCategory === 'all') {
          return menu;
        } else {
          return menu.filter((cake) =>
            cake.category.toLowerCase().includes(selectedCategory.toLowerCase()),
          );
        }
    }, [menu, selectedCategory]);


  return typeof mobile !== "undefined" ? (
    mobile ? (
      <div className={s.container}>
        <MenuLists
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <SwiperJS filteredCakes={filteredCakes} />
        <MenuText />
      </div>
    ) : (
      <>
        <div className={s.container}>
          <MenuLists
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <MenuText />
        </div>
  
        <div className={s.cards}>
          {filteredCakes &&
           filteredCakes.map((cake) => (<Card cake={cake} key={cake.id}/>))}
        </div>
      </>
    )
    ) : null; 
}

// filteredCakes.map((cake) => (<Link href={`/menu/${cake.id}`} key={cake.id}><Card cake={cake}/></Link>))}


