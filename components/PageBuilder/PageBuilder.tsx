import CodeLine from '../CodeLine/CodeLine';
import Comment from '../Comment/Comment';
import styles from './Page.module.css';
import {
  BlockProps,
  CommentProps,
  CustomNode,
  IField,
  LineProps
  } from '../../data';
import { classnames } from '../../utils';

interface IPageBuilder {
  data: CustomNode;
  order?: number;
}
const PageBuilder: React.FC<IPageBuilder> = ({ data, order = 0 }) => {
  if (!data) return null;

  const page = (Object.entries(data) as Array<[string, IField]>).map(([key, value], index) => {
    const { type, ...other } = value;

    switch (type) {
      case 'block':
        const { title, descendants } = other as BlockProps;
        return (
          <div key={key} className={styles.blockWrapper}>
            <h1 className={classnames(styles.order, styles[`order-${order}`])}>{`${title} `}&#123;</h1>
            {<PageBuilder data={descendants} order={order + 1} />}
            <h1 className={classnames(styles.order, styles[`order-${order}`])}>&#125;</h1>
          </div>
        );
      case 'comment':
        return <Comment content={(other as CommentProps).content} key={key} type="code" />;

      default:
        return <CodeLine content={(other as LineProps).content} key={key} {...other} />;
    }
  });
  return <>{page}</>;
};

export default PageBuilder;
