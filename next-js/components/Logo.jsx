import Image from 'next/image';
import Link from 'next/link';
import s from '../styles/Logo.module.scss';

export default function Logo() {
  return (
    <Link href='/'>
        <div className={s.logo}>
            <div className={s.logoIcon}>
                <Image
                    alt='logo-icon_cake'
                    src='/img/logo/logo-icon_yana_caker.svg'
                    width={60}
                    height={60}
                    // priority={true}
                    // style={{ transform: 'translate3d(0, 0, 0)'}}
                />
            </div>
            <div className={s.logoText}>
                <Image
                    alt='logo-text_yana_caker'
                    src='/img/logo/logo-text_yana_caker.svg'
                    width={100}
                    height={70}
                    // priority={true}
                    // style={{ transform: 'translate3d(0, 0, 0)', width: 'auto' }}
                />
            </div>
        </div>
    </Link>
  )
}


