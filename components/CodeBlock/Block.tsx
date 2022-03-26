interface IBlock {
  content: Node;
  title: string;
}

const CodeBlock: React.FC<IBlock> = ({ title, content }) => {
  return (
    <div>
      <span>{title}</span>
      {/*   {Array.isArray(children)
        ? children.map((child) => {
            child;
          })
        : children} */}
    </div>
  );
};

export default CodeBlock;
