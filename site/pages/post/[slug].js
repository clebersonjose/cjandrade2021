import Head from "next/head";
import { useRouter } from "next/router";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  blogApi,
  GET_POST,
  GET_POSTS_FEED_TOTAL,
} from "../../services/blogApi";

import styles from "./styles.module.scss";

export default function Post({ post }) {
  const router = useRouter();

  return (
    <div className={styles.postPage}>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Header title="CJ Andrade / Blog" />
      <main>
        <h2 className={styles.postTitle}>{post.title}</h2>

        <article className={styles.postContent}>
          <img
            className={styles.postImg}
            alt={post.title}
            src={post.coverImage.url}
          />
          <div
            className={styles.postContentText}
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
        </article>
      </main>

      <button className={styles.buttonBack} onClick={() => router.back()}>
        <FontAwesomeIcon size="3x" fixedWidth icon={faArrowLeft} />
        <span className={styles.text}>Voltar</span>
      </button>
      <Footer />
    </div>
  );
}

export const getStaticPaths = async () => {
  const posts = await blogApi
    .post("", { query: GET_POSTS_FEED_TOTAL })
    .then((result) => result.data.data.posts);

  const paths = await posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const data = await blogApi
    .post("", { query: GET_POST(slug) })
    .then((result) => result.data.data.post);

  return {
    props: {
      post: data,
    },
    revalidate: 86400,
  };
};
