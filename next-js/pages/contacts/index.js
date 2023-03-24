import Head from 'next/head';
import Link from 'next/link';
// import { useState, useEffect } from 'react';
import Heading from '@/components/Heading';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data = null;
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

export default function Contacts({ contacts }) {
  //   const [contacts, setContacts] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //       const data = await response.json();
  //       setContacts(data);
  //     };
  //     fetchData();
  //   }, []);

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text='Contacts list:' />
      <ul>
        {contacts &&
          contacts.map(({ id, name, email }) => (
            <li key={id}>
                <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
            // <li key={id}>
            //   <strong>{name}: </strong>
            //   {email}
            // </li>
          ))}
      </ul>
    </>
  );
}
