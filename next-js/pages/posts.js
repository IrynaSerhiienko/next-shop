import Head from 'next/head';
import Heading from '@/components/Heading';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text='Posts list:' />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ratione, dolorum dolor
        molestiae alias, ipsam nostrum fugit exercitationem magni vitae nesciunt at? Odit corporis,
        voluptatum voluptatibus illum repellat inventore praesentium!
      </p>
    </>
  );
}
