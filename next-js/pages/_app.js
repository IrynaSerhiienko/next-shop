import Layout from '@/components/Layout';
import Image from 'next/image';
import youtubeImg from '@/public/youtube.png';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Image
        src={youtubeImg}
        width={500}
        height={350}
        alt='preview'
        placeholder='blur'
        blurDataURL=''
      /> */}
    </Layout>
  );
}
