import Link from "next/link";
import CardPost from "../CardPost";
import styles from "./styles.module.scss";

export default function FeedPosts(props) {
  const pages = () => {
    let totalPages = props.totalItems / props.itemsPerPage;
    let pagesArray = [];

    for (let index = 1; index < totalPages + 1; index++) {
      pagesArray.push(index);
    }

    return pagesArray;
  };

  return (
    <section className={styles.feedPosts}>
      <h2 className={styles.feedPostsTitle}>Posts:</h2>
      <div className={styles.feedPostsItems}>
        {props.posts.map((post) => {
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
            <Link href={`/blog/${page}`} key={page}>
              <a
                className={`${styles.feedPostsPaginationItem} ${
                  props.isPage == page && styles.active
                }`}
              >
                {page}
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
