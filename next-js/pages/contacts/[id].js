import Head from 'next/head';
import ContactInfo from '@/components/ContactInfo';
import Heading from '@/components/Heading';

export default function Contact({contact}) {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact}/>
      {/* <Heading text='Jack' /> */}
    </>
  );
}
