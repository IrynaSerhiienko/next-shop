import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import GalleryContent from '@/components/GalleryContent';
import s from '@/styles/Gallery.module.scss';
// import Link from 'next/link';

export const getStaticProps = async (context) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/gallery/`);
    // const response = await axios.get('http://localhost:3000/api/gallery/');
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

          <div className={s.titleHolder}>
            <Image
              className={s.title}
              alt='title Gallery '
              style={{ transform: 'translate3d(0, 0, 0)', width: 'auto' }}
              src='/img/main_gallery/gallery_title.svg'
              width={176}
              height={70}
              loading='eager'
              // style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
            />

            <Image
              className={s.subTitle}
              alt='subTitle Our exquisite designs'
              style={{ transform: 'translate3d(0, 0, 0)', width: 'auto' }}
              src='/img/main_gallery/gallery_subtitle.svg'
              width={254}
              height={40}
              loading='eager'
              // style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* <div className={s.title}>
            <Image
              alt='title our exquisite designs '
              style={{ transform: 'translate3d(0, 0, 0)' }}
              src='/img/main_gallery/frame.png'
              width={450}
              height={68}
              loading={'eager'}
              sizes='(max-width: 640px) 100vw,
              (max-width: 768px) 33vw,
              (max-width: 1280px) 25vw'
              //   loading={id < 4 ? 'eager' : 'lazy'}
              //   placeholder='blur'
              //   blurDataURL={blurDataUrl}
            />
          </div> */}

          <div className={s.gallerySection}>{gallery && <GalleryContent gallery={gallery} />}</div>
        </div>
      </section>
    </>
  );
}
