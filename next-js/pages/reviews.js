import Head from 'next/head';
import Heading from '@/components/Heading';
import { useWindowSize } from 'react-use';

export default function Reviews() {
  const { width } = useWindowSize();
  const isMobile = width < 767;

  return (
    <>
      <Head>
        <title>Reviews</title>
      </Head>
      {/* <Heading text='Reviews list:' /> */}
    </>
  );
}
