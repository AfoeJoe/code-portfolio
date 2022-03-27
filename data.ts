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
        content: 'Fullstack JavaScript Developer',
      },
      key11: {
        type: 'comment',
        content: 'okunola_joshua@yahoo.com',
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
            content: 'Frontend JavaScript Developer Intern, Open Solutions Inc. (Apr. 2021 – Jun. 2021)',
          },
          key21: {
            content: 'Full  Stack JavaScript Developer - React, Open Solutions Inc. (Jul. 2021 – Ongoing)',
          },
        },
      },
      key14: {
        type: 'block',
        title: 'Education',
        descendants: {
          key0: {
            content: 'BEng - Electronics Engineering, KSPEU (Sept. 2015 – Jun. 2021)',
          },
          key1: {
            content: 'School 21 coding school, Ru (also 42 school, Fr and US) (Aug.. 2020 – Apr. 2021) ',
          },
        },
      },
      key15: {
        type: 'block',
        title: 'Projects',
        descendants: {
          key0: {
            content: 'Telemedicine Project (commercial) ',
          },
          key1: {
            content: 'FinTech  Project (commercial)',
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
