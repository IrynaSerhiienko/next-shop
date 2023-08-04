// import { GoogleFonts } from 'next-google-fonts';
import '@/styles/globals.scss';
import Layout from '@/components/Layout';


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
        {/* <GoogleFonts href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap' /> */}
      </main>
    </Layout>
  );
}
