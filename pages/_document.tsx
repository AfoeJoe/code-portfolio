import ThemeProvider from '../context/ThemeContext';
import {
  Head,
  Html,
  Main,
  NextScript
  } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Profesional FullStack Javascript developer. Expertise in both frontend and backend technologies. Experience in using modern technologies like react , next js and node to craft a professional looking and performant websites and web apps."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="XXIA-VlkOefOeq8suW2M022ald6GXzG6JWQQnDjqlhw" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
