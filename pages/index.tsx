import CVButton from '../components/CVButton/CVButton';
import data from '../data';
import Head from 'next/head';
import PageBuilder from '../components/PageBuilder/PageBuilder';
import styles from '../styles/Home.module.css';
import Toggle from '../components/Toggle/Toggle';
import useThemeContext from '../hooks/useThemeContext';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { theme } = useThemeContext();

  return (
    <div data-theme={theme} className={styles.container}>
      <Head>
        <title>Okunola Joshua | Software developer</title>
        <meta
          name="description"
          content="Profesional FullStack Javascript developer. Expertise in both frontend and backend technologies. Experience in using modern technologies like react , next js and node to craft a professional looking and performant websites and web apps."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main className={styles.main}>
        <PageBuilder data={data} />
        <Toggle />
        <CVButton />
      </main>
    </div>
  );
};

export default Home;
