import Link from 'next/link';
import {useState, useEffect} from "react";
import { useRouter } from 'next/router';
import CardPost from "../CardPost";
import { blogApi, GET_POSTS_FEED, GET_POSTS_FEED_TOTAL } from "../../services/blogApi";
import styles from './styles.module.scss';

export default function FeedPosts() {
  const [posts, setPosts] = useState([]);
  const [totalItems, setTotalItems] = useState([]);

  const itemsPerPage = 4;
  const router = useRouter();
  const isPage = (router.query.page) ? Number(router.query.page) : 1;

  useEffect(()=>{
    blogApi
      .post('', { query: GET_POSTS_FEED(itemsPerPage, (isPage === 1) ? 0 : (itemsPerPage * (isPage - 1))) })
      .then(result => setPosts(result.data.data.posts));
  }, [isPage, router.query.page]);

  useEffect(()=>{
    blogApi
      .post('', { query: GET_POSTS_FEED_TOTAL })
      .then(result => setTotalItems(result.data.data.posts.length));
  }, [isPage]);

  const pages = () => {
    let totalPages = totalItems/itemsPerPage;
    let pagesArray = [];

    for (let index = 1; index < totalPages+1; index++) {
      pagesArray.push(index);
    }

    return pagesArray;
  };

  return (
    <section className={styles.feedPosts}>
      <h2 className={styles.feedPostsTitle}>Posts:</h2>
      <div className={styles.feedPostsItems}>
        {posts.map((post)=> {
          return (
            <CardPost 
              key={post.id} 
              title={post.title} 
              slug={post.slug} 
              img={post.coverImage.url}
              excerpt={post.excerpt}
            />
          );
        })}
      </div>

      <div className={styles.feedPostsPagination}>
        {pages().map((page) => {
          return (
            <Link href={`/${page}`} key={page}>
              <a className={`${styles.feedPostsPaginationItem} ${(isPage === page) && styles.active}`}>{page}</a>
            </Link>
          );
        })}
      </div>
    </section>
  );
}