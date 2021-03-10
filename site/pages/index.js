import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CJ Andrade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cléberson José de Andrade
        </h1>

        <p className={styles.description}>
          Desenvolvedor Web - PHP / JavaScript
        </p>

        <div className={styles.grid}>
          <a href="https://api.whatsapp.com/send?phone=5511953870510" className={styles.card}>
            <h3>WhatsApp  &rarr;</h3>
            <p>Entre em contato via WhatsApp</p>
          </a>

          <a href="mailto:cleberson@cjandrade.com.br" className={styles.card}>
            <h3>E-mail &rarr;</h3>
            <p>Entre em contato via E-mail</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>cjandrade.com.br</p>
      </footer>
    </div>
  )
}
