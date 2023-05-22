import Image from 'next/image';
import Link from 'next/link';
import s from '../styles/CallMb.module.scss';

export default function CallMb() {
  return (
    <Link href='/'>
        <div className={s.callIcon}>
          <Image
            alt='callIcon'
            src='/img/main_hero/callMb.svg'
            fill
          />
        </div>
    </Link>
  )
}


