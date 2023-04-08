import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Hero from '@/components/hero/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Impressionable Gifts</title>
        <meta
          name="description"
          content="Wall Décor, Ladies Clothing, Jewellery, Accent Furniture, Accessories"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <div className={styles.description}>
          <p>Impressionable Gifts</p>
          <div></div>
        </div>
      </main>
    </>
  );
}
