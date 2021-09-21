import Link from "next/link";
import styles from "./styles.module.scss";

export default function CardPost(props) {
  return (
    <Link href={`/post/${props.slug}`}>
      <article className={styles.cardPost}>
        <img className={styles.cardPostImg} alt={props.title} src={props.img} />

        <div className={styles.cardPostContent}>
          <h3 className={styles.cardPostTitle}>{props.title}</h3>

          <p className={styles.cardPostExcerpt}>{props.excerpt}</p>
        </div>
      </article>
    </Link>
  );
}
