import Head from "next/head";
import Heading from "@/components/Heading";

export default function Reviews() {
    return (
      <>
        <Head>
          <title>Reviews</title>
        </Head>
        <Heading text='Reviews list:' />
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