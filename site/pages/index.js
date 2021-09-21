import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CJ Andrade</title>
      </Head>
      <Header title="CJ Andrade" />
      <main>
        <Link href="/blog/1">Blog</Link>
      </main>
      <Footer />
    </div>
  );
}
