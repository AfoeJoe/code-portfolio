import styles from './Comment.module.css';

interface IComment {
  type: 'comment' | 'code';
  content: string;
}
const Comment: React.FC<IComment> = ({ type, content }) => {
  return <pre className={styles.comment}>&#x2f;&#x2f; {content}</pre>;
};

export default Comment;
