import { CustomNode, IField } from './data';

export function classnames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(' ');
}

export const getTypeAndBuild = ({ type, ...others }: IField) => {
  switch (type) {
    case 'block':
      break;
    case 'comment':
      break;

    default:
      '';
      break;
  }
};

const buildPage = (data: CustomNode) => {
  const ara = Object.entries(data);
  return ara.map(([key, value]) => {
    getTypeAndBuild(value);
  });
};
export default buildPage;
