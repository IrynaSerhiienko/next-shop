import Head from 'next/head';
import ContactInfo from '@/components/ContactInfo';
import Heading from '@/components/Heading';

export const getServerSideProps = async (context) => {  //SSR
    // console.log(context);
    const {id} = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
  
    if (!data) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: { contact: data },
    };
  };

export default function Contact({contact}) {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact}/>
    </>
  );
}
