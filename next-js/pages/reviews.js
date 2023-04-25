import Head from "next/head";
import Heading from "@/components/Heading";
import { useWindowSize } from 'react-use';

export default function Reviews() {
    const { width } = useWindowSize();
    const isMobile = width < 767;

    return (
      <>
        <Head>
          <title>Reviews</title>
        </Head>
        <Heading text='Reviews list:' />
        
        {isMobile ?
            (<p>This is mobile view</p>) :
            (<p>This is desktop view</p>)}
        {/* <ul>
          {posts &&
            posts.map(({ id, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
              </li>
            ))}
        </ul> */}
      </>
    );
  }