
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LACERA – Music, NFTs, Licensing</title>
        <meta name="description" content="Official LACERA website for music releases, NFTs, and licensing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to LACERA</h1>

        <p className={styles.description}>This platform hosts:</p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}><h2>📀 Releases</h2><p>Explore albums & music releases.</p></a>
          <a href="#" className={styles.card}><h2>🎭 Aura</h2><p>Live & value negotiation.</p></a>
          <a href="#" className={styles.card}><h2>🎧 Album #3</h2><p>Coming soon – the next big sound.</p></a>
          <a href="#" className={styles.card}><h2>🧾 Licensing</h2><p>Commercial & sync licensing options.</p></a>
          <a href="#" className={styles.card}><h2>💳 NFT/Web3</h2><p>Connect your wallet & explore digital ownership.</p></a>
          <a href="#" className={styles.card}><h2>📜 Lyrics</h2><p>Read and interact with song lyrics.</p></a>
        </div>
      </main>

      <footer className={styles.footer}>© {new Date().getFullYear()} LACERA</footer>
    </div>
  );
}
