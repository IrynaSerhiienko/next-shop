import s from '../styles/Content.module.scss';
// import Hero from './Hero';
import MenuHome from './MenuHome';

export default function Content({ cakes }) {
  return (
    <div className={s.content}>
      {/* <Hero /> */}
      <MenuHome cakes={cakes} />
      {/* <MenuHome /> */}
    </div>
  );
}
