import styles from './CodeLine.module.css';

interface ICodeLine {
  content: string;
}
const CodeLine: React.FC<ICodeLine> = ({ content }) => {
  return <div className={styles.line}>{content}</div>;
};

export default CodeLine;
