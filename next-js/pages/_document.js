import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      {/* <Head /> */}
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
