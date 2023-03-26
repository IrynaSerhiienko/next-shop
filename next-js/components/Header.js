import s from '@/styles/Header.module.scss';

import Navbar from './Navbar';

export default function Header() {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <Navbar />
      </header>
    </div>
  );
}
