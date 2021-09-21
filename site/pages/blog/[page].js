import Head from "next/head";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FeedPosts from "../../components/FeedPosts";

import styles from "../../styles/Blog.module.scss";
import {
  blogApi,
  GET_POSTS_FEED,
  GET_POSTS_FEED_TOTAL,
} from "../../services/blogApi";

export default function Blog({ page, totalItems, posts, itemsPerPage }) {
  return (
    <div className={styles.blogPage}>
      <Head>
        <title>CJ Andrade / Blog</title>
      </Head>
      <Header title="CJ Andrade / Blog" />
      <main>
        <FeedPosts
          isPage={page}
          totalItems={totalItems}
          posts={posts}
          itemsPerPage={itemsPerPage}
        />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticPaths = async () => {
  const itemsPerPage = 4;

  const totalItems = await blogApi
    .post("", { query: GET_POSTS_FEED_TOTAL })
    .then((result) => result.data.data.posts.length);

  const pathsArray = await new Array(Math.ceil(totalItems / itemsPerPage));

  const paths = await pathsArray.map((path, index) => ({
    params: {
      page: index,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { page } = params;

  const itemsPerPage = 4;

  const totalItems = await blogApi
    .post("", { query: GET_POSTS_FEED_TOTAL })
    .then((result) => result.data.data.posts.length);

  const posts = await blogApi
    .post("", {
      query: GET_POSTS_FEED(
        itemsPerPage,
        page === 1 ? 0 : itemsPerPage * (page - 1)
      ),
    })
    .then((result) => result.data.data.posts);

  return {
    props: {
      page,
      totalItems,
      posts,
      itemsPerPage,
    },
    revalidate: 3600,
  };
};
