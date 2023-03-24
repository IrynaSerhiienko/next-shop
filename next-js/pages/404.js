import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Heading from '@/components/Heading';
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
      <Heading text='404' />
      <Heading tag='h2' text='Something is going wrong...' />
    </div>
  );
}
