import s from '../styles/Content.module.scss';
import AboutUsHome from './AboutUsHome';
// import Hero from './Hero';
import MenuHome from './MenuHome';

export default function Content({ cakes }) {
  return (
    <div className={s.content}>
      {/* <Hero /> */}
      {/* <AboutUsHome /> */}
      <MenuHome cakes={cakes} />
    </div>
  );
}
