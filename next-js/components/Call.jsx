import Image from 'next/image';
import Link from 'next/link';
import s from '../styles/Call.module.scss';

export default function Call() {
  return (
    <Link href='/'>
            <div className={s.callIcon}>
                <Image
                    alt='callIcon'
                    src='/img/call/call.svg'
                    width={30}
                    height={30}
                    // priority={true}
                />
            </div>
    </Link>
  )
}


