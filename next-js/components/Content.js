import s from '../styles/Content.module.scss';
import Hero from './Hero';

export default function Content() {
  return (
    <div className={s.content}>
      <Hero />
    </div>
  );
}
