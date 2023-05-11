import Navbar from './Navbar';
import s from '@/styles/Header.module.scss';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Navbar />
      </div>
    </header>
  );
}
