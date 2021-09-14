import Head from 'next/head';
import Header from '../components/Header';
import FeedPosts from '../components/FeedPosts';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Head>
        <title>CJ Andrade / Blog</title>
      </Head>
      <Header />
      <main>
        <FeedPosts />
      </main>
      <Footer />
    </div>
  );
}
