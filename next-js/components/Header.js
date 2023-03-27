import s from '@/styles/Header.module.scss';

import Navbar from './Navbar';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Navbar />
      </div>
    </header>
  );
}
