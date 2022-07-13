import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> CODE & DESIGN</title>
        <meta name="description" content="Marcos Juan personal corner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>CODE & DESIGN</h1>
      </main>
    </div>
  );
}
