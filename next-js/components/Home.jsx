import s from '../styles/Home.module.scss';
// import AboutUsHome from './AboutUsHome';
import Hero from './Hero';
import MenuHome from './MenuHome';

export default function Home({ cakes }) {
  return (
    <div className={s.content}>
      <Hero />
      {/* <AboutUsHome /> */}
      <MenuHome cakes={cakes} />
    </div>
  );
}
