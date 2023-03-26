import Head from 'next/head';
import s from '../styles/Socials.module.scss';

export default function Socials({ socials }) {
  if (!socials) {
    return null;
  }

  return (
    <>
      <Head>
        
      </Head>
      {/* <ul className={s.cakes}>
        {cakes &&
          cakes.map(() => (
            <li key={key}>
             <img src="" alt="" />
            </li>
          ))}
      </ul> */}
    </>
  );
}
