import s from '@/styles/Header.module.scss';

import Navbar1 from './Navbar1';
// import Navbar1 from './Navbar';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Navbar1 />
        {/* <Navbar /> */}
      </div>
    </header>
  );
}
