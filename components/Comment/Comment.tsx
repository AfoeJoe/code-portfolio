import Link from 'next/link';
import styles from './Comment.module.css';

interface IComment {
  type: 'comment' | 'code';
  content: string;
  link?: string;
}
const Comment: React.FC<IComment> = ({ type, content, link }) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <a className={styles.comment}>&#x2f;&#x2f; {content}</a>
        </Link>
      ) : (
        <span className={styles.comment}>&#x2f;&#x2f; {content}</span>
      )}
    </>
  );
};

export default Comment;
