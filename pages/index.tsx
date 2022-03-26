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
