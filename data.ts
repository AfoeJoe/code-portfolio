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
  key00: {
    type: 'block',
    title: 'Okunola Joshua',
    descendants: {
      key10: {
        type: 'comment',
        content: 'JS Developer',
      },
      key11: {
        type: 'comment',
        content: 'Okunola_joshua@yahoo.com',
      },
      key12: {
        type: 'comment',
        content: '+79270434722',
      },
      key13: {
        type: 'block',
        title: 'Employment',
        descendants: {
          key20: {
            content: 'JavaScript Developer Intern, Open Solutions (Apr 2021 – Jun 2021)',
          },
          key21: {
            content: 'JavaScript Developer - React, Open Solutions (Jul 2021 – Ongoing)',
          },
        },
      },
      key14: {
        type: 'block',
        title: 'Education',
        descendants: {
          key0: {
            content: 'Electronics Engineering, KSPEU (Sept. 2015– June 2021)',
          },
          key1: {
            content: 'School 21, Ru (school 42, France and US) (Aug 2020 – Apr 2021) ',
          },
        },
      },
      key15: {
        type: 'block',
        title: 'Projects',
        descendants: {
          key0: {
            content: 'Telemedicine ',
          },
          key1: {
            content: 'FinTech  ',
          },
        },
      },
      key16: {
        type: 'block',
        title: 'Languages',
        descendants: {
          key0: {
            content: 'JavaScript; TypeScript; React.JS, Next.JS; NodeJS; HTML; CSS;',
          },
          key1: {
            content: 'VS Code;  Figma; Jira; MacOS, Windows; Linux;',
          },
        },
      },
    },
  },
};

export default data;
