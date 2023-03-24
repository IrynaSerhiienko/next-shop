import Head from 'next/head';
import Heading from '@/components/Heading';
import Socials from '@/components/Socials';
import s from '@/styles/Home.module.scss';

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: data },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

export default function Home({ socials }) {
  return (
    <div className={s.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text='Hello world!' />
      <Socials socials={socials} />
    </div>
  );
}
