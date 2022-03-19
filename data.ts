import { ReactElement } from 'react';
/* interface IField {
    type  : 'comment'|'block'|'line'
    content
}
 */

export type BlockProps = {
  type: 'block';
  title: string;
  descendants: CustomNode;
};

export type CommentProps = {
  type: 'comment';
  content: string;
};

export type LineProps = {
  type?: 'line';
  content: string;
};

export type IField = BlockProps | CommentProps | LineProps;

export type CustomNode = Record<string, IField>;

const data: CustomNode = {
  key0: {
    type: 'block',
    title: 'Okunola Joshua',
    descendants: {
      key1: {
        type: 'comment',
        content: 'JS Developer',
      },
      key2: {
        type: 'comment',
        content: 'Okunola_joshua@yahoo.com',
      },
      key3: {
        type: 'comment',
        content: '+79270434722',
      },
      key0: {
        type: 'block',
        title: 'About Me',
        descendants: {
          key4: {
            type: 'line',
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eiu opti Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eiu opti',
          },
        },
      },
      key5: {
        type: 'block',
        title: 'Education',
        descendants: {
          key0: {
            type: 'line',
            content: 'Bsc ',
          },
          key1: {
            type: 'line',
            content: 'School 21 ',
          },
        },
      },
      key6: {
        type: 'block',
        title: 'Work Experience',
        descendants: {
          key0: {
            type: 'line',
            content: 'Bsc ',
          },
          key1: {
            type: 'line',
            content: 'School 21 ',
          },
        },
      },
    },
  },
};

export default data;
