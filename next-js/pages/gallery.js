import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import GalleryContent from '@/components/GalleryContent';
import s from '@/styles/Gallery.module.scss';
// import Link from 'next/link';

export const getStaticProps = async (context) => {
  try {
    const response = await axios.get('http://localhost:3000/api/gallery/');
    const gallery = response.data;
    // console.log(cakes);

    return {
      props: { gallery },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default function Gallery({ gallery }) {
  return (
    <>
      <section className={s.gallery}>
        <div className={s.wrapper}>
          <Head>
            <title>Gallery</title>
          </Head>

          <div className={s.title}>
            <Image src='/img/main_gallery/frame.png' width={450} height={68} alt='preview' />
          </div>

          <div className={s.gallerySection}>{gallery && <GalleryContent gallery={gallery} />}</div>
        </div>
      </section>
    </>
  );
}
