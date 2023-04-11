import { useState, useMemo } from 'react';
import Image from 'next/image';
import s from '@/styles/Gallery.module.scss';

export default function GalleryContent({ gallery }) {
  const [selectedCategory, setSelectedCategory] = useState('her');

  const filteredGallery = useMemo(() => {
    return gallery.filter((item) =>
      item.category.toLowerCase().includes(selectedCategory.toLowerCase()),
    );
  }, [gallery, selectedCategory]);

  return (
    <>
      <div className={s.asideContainer}>
        <aside className=''>
          <ul className={s.galleryLists}>
            <li
              className={`${s.galleryList} ${selectedCategory === 'her' ? s.active : ''}`}
              onClick={() => setSelectedCategory('her')}
            >
              for her
            </li>
            <li
              className={`${s.galleryList} ${selectedCategory === 'him' ? s.active : ''}`}
              onClick={() => setSelectedCategory('him')}
            >
              for him
            </li>
            <li
              className={`${s.galleryList} ${selectedCategory === 'children' ? s.active : ''}`}
              onClick={() => setSelectedCategory('children')}
            >
              on a children’s party
            </li>
            <li
              className={`${s.galleryList} ${selectedCategory === 'appreciation' ? s.active : ''}`}
              onClick={() => setSelectedCategory('appreciation')}
            >
              appreciation cake
            </li>
            <li
              className={`${s.galleryList} ${selectedCategory === 'corporative' ? s.active : ''}`}
              onClick={() => setSelectedCategory('corporative')}
            >
              corporative
            </li>
            <li
              className={`${s.galleryList} ${selectedCategory === 'wedding' ? s.active : ''}`}
              onClick={() => setSelectedCategory('wedding')}
            >
              wedding proposal
            </li>
          </ul>
        </aside>
        <p className={s.galleryText}>
          all <b>decoration is optional</b> and can be changed according to your wishes: size,
          color, quantity
        </p>
        <p className={s.galleryText}>you can choose the decoration you like or trust us</p>
      </div>

      <div className={s.cardsContainer}>
        <div className={s.cards}>
          {filteredGallery &&
            filteredGallery.map((cake) => (
              <div key={cake.id} className={`${s.card}`}>
                <Image
                  src={cake.image}
                  alt={cake.name || 'Cake image'}
                  width={500}
                  height={668}
                  className={s.img}
                  priority={true}
                  //alt={cake.name}
                  // loading='eager'
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
