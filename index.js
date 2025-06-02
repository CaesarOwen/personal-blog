import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Owen Glory | Full Stack Developer</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Hi, I’m Owen Glory 👋</h1>
        <p className={styles.description}>Full Stack Developer | Mobile & Web Apps | NewsNest | School Management System</p>
        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>NewsNest &rarr;</h3>
            <p>A modern online news app</p>
          </a>
          <a href="#" className={styles.card}>
            <h3>School Management System &rarr;</h3>
            <p>Comprehensive desktop-based school software</p>
          </a>
        </div>
      </main>
    </div>
  );
}