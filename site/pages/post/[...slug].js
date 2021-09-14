import Head from 'next/head';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { blogApi, GET_POST } from "../../services/blogApi";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/Post.module.scss';

export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState({
    "id": "",
    "title": "",
    "coverImage":{
      "url": ""
    },
    "content":{
      "html": ""
    }
  });

  useEffect(()=>{
    blogApi
      .post('', { query: GET_POST(router.query.slug) })
      .then(result => setPost(result.data.data.post))
  }, [router.query.slug]);

  return (
    <div className={styles.postPage}>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Header />
      <main>        
        <h2 className={styles.postTitle}>{post.title}</h2>

        <article className={styles.postContent}>
          <img className={styles.postImg} alt={post.title} src={post.coverImage.url} />
          <div 
            className={styles.postContentText}
            dangerouslySetInnerHTML={{__html: post.content.html}} 
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