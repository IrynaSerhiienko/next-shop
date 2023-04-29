import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Heading from '@/components/Heading';
import Image from 'next/image';
import s from '../styles/404.module.scss';

export default function Error() {
  const router = useRouter();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       router.push('/');
  //     }, 3000);
  //   }, [router]);

  return (
    <div className={s.wrapper}>
      <Head>
        <title>Error 404</title>
      </Head>
      <div className={s.img}>
        <Image
          alt='error-404'
          src='/img/main_404/404.png'
          width={570}
          height={340}
          priority={true}
          style={{ transform: 'translate3d(0, 0, 0)', height: 'auto' }}
        />
      </div>
      {/* <Heading tag='h2' text='oh, something went wrong' /> */}
      <p className={s.text}>oh, something went wrong</p>
      <Link href='/'>
        <button className={s.btn}>main page</button>
      </Link>
    </div>
  );
}



