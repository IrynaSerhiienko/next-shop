// import Head from 'next/head';
// import PostInfo from '@/components/PostInfo';

// export const getStaticPaths = async () => { //SSG
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();

//   const paths = data.map(({ id }) => ({
//     params: { id: id.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => { //SSR  _filling static pages with content_ 
//   const { id } = context.params;
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const data = await response.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { post: data },
//   };
// };

// export default function Post({ post }) {
//   return (
//     <>
//       <Head>
//         <title>Post</title>
//       </Head>
//       <PostInfo post={post} />
//     </>
//   );
// }
