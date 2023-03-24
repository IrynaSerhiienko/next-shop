import Head from 'next/head';
import Heading from '@/components/Heading';

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text='Contacts list:' />
    </>
  );
}
