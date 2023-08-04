import axios from 'axios';
import Head from 'next/head';
import CardDetails from '../../../components/CardDetails';

import s from '@/styles/Card.module.scss';

export const getStaticPaths = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/menu/`);
    const data = response.data;

    const paths = data.map((cake) => {
      return {
        params: { id: cake.id.toString() },
      };
    });

    // console.log('return paths>>>', paths);

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error(error);
    return {
      //   notFound: true,
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async (context) => {
  try {
    let id = context.params.id;
    // const { id } = context.params;
    const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/menu`);
    // const response = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_ENV}/menu?id=${id}`);
    const data = response.data;
    console.log('Data:>>>', data);
    const cake = data.find((cake) => cake.id.toString() === id);
    console.log('Cake:>>>', cake);

    return {
      props: { cake },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default function Details({ cake }) {
  return (
    <>
      <Head>
        <title>Cake details</title>
      </Head>
      <div className={s.wrapper}>
        <CardDetails cake={cake} />
      </div>
    </>
  );
}
