// import { GoogleFonts } from 'next-google-fonts';
import Layout from '@/components/Layout';
import Image from 'next/image';
import youtubeImg from '@/public/youtube.png';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
        {/* <GoogleFonts href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap' /> */}
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
