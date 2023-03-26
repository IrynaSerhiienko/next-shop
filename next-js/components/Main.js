import s from '../styles/Main.module.scss';
import Hero from './Hero';

export default function Main() {
  return (
    <div className={s.main}>
      <Hero />
    </div>
  );
}
