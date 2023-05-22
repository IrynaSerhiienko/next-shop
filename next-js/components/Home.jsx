import Hero from './Hero';
import MenuHome from './MenuHome';
import GalleryHome from './GalleryHome';

import s from '../styles/Home.module.scss';

export default function Home({ menu, gallery }) {
  return (
    <div className={s.content}>
      <Hero />
      <MenuHome menu={menu} />
      <GalleryHome gallery={gallery}/>
    </div>
  );
}
