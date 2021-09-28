import Head from "next/head";
import Link from "next/link";

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>CJ Andrade</title>
      </Head>

      <Header title="CJ Andrade" />

      <main className={styles.homePage}>
        <section className={styles.homePageContent}>
          <img
            className={styles.homePageContentImg}
            alt="Cléberson José de Andrade"
            src="/images/foto.jpg"
          />

          <h2 className={styles.homePageContentTitle}>
            Cléberson José de Andrade
          </h2>

          <p className={styles.homePageContentText}>
            Sou apaixonado por programação, area em que atuo focando na solução de problemas de cliente e usuarios. Atualmente PHP e JavaScript são minhas principais ferramentas de trabalho.
          </p>

          <a
            className={styles.homePageContentContato}
            href="mailto: clebersonjosea@gmail.com"
            rel="noopener noreferrer"
          >
            Contato
          </a>

          <div className={styles.homePageContentRedes}>
            <a
              href="https://www.linkedin.com/in/clebersonandrade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="lg" fixedWidth icon={faLinkedin} />
            </a>

            <a
              href="https://github.com/clebersonjose/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon size="lg" fixedWidth icon={faGithubSquare} />
            </a>
          </div>
        </section>

        <section className={styles.homePageBlog}>
          <Link href="/blog/1">
            <a>
              <p>Blog</p>
              <FontAwesomeIcon size="3x" fixedWidth icon={faArrowRight} />
            </a>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
