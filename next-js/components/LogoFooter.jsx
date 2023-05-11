import Image from 'next/image';
import Link from 'next/link';
import s from '../styles/Logo.module.scss';

export default function LogoFooter({width, height}) {
    const logoStyles = {
        width: `${width}px`,
        height: `${height}px`
    };
    
  return (
    <Link href='/'>
        <div className={s.logo} >
            <div className={s.logoText} >
                <Image
                    style={logoStyles}
                    alt='logo-text_yana_caker'
                    src='/img/footer/logo-text_yana_caker.svg'
                    width={65}
                    height={44}
                    // priority={true}
                />
            </div>
        </div>
    </Link>
  )
}


