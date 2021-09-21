import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Header(props){
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.headerTitle}>{props.title}</h1>
      </Link>

      <div className={styles.headerLinks}>
        <a href="https://www.linkedin.com/in/clebersonandrade/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon size="2x" fixedWidth icon={faLinkedin} />
        </a>

        <a href="https://github.com/clebersonjose/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon size="2x" fixedWidth icon={faGithubSquare} />
        </a>
      </div>
    </header>
  );
}