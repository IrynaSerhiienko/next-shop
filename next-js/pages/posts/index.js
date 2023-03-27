import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Heading from '@/components/Heading';

export const getStaticProps = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //   const data = null;
    const posts = response.data;

    return {
      props: { posts },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      
      <Heading text='Posts list:' />
      <ul>
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
