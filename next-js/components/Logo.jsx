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
                    width={50}
                    height={50}
                    // priority={true}
                />
            </div>
            <div className={s.logoText}>
                <Image
                    alt='logo-text_yana_caker'
                    src='/img/logo/logo-text_yana_caker.svg'
                    width={65}
                    height={44}
                    // priority={true}
                />
            </div>
        </div>
    </Link>
  )
}


