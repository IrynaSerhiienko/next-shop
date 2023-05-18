// import AboutUsHome from './AboutUsHome';

import Hero from './Hero';
import MenuHome from './MenuHome';
import s from '../styles/Home.module.scss';

export default function Home({ menu }) {
  return (
    <div className={s.content}>
      <Hero />
      {/* <AboutUsHome /> */}
      <MenuHome menu={menu} />
    </div>
  );
}
