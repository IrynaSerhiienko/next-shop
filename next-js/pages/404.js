import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Heading from '@/components/Heading';
import Image from 'next/image';
import s from '../styles/404.module.scss';

export default function Error() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className={s.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div className={s.error404}>
        <Image src='/img/main_404/404.png' width={570} height={340} alt='preview' />
      </div>
      <Heading tag='h2' text='oh, something went wrong' />
    </div>
  );
}
