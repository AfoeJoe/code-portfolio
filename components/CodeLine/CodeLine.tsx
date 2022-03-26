import styles from './CodeLine.module.css';

interface ICodeLine {
  content: string;
}
const CodeLine: React.FC<ICodeLine> = ({ content }) => {
  return <li className={styles.line}>{content}</li>;
};

export default CodeLine;
