/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  template: {
    favicon: 'src/assets/book-favicon.ico',
  },
  theme: {
    color: {
      link: '#3C40C6',
      linkHover: '#242AC6',
    },
    fontFamily: {
      base: '"Open Sans", sans-serif',
    },
  },
  pagePerSection: true,
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  title: 'FaleMais - Docs',
  sections: [
    {
      name: 'Introdução',
      content: './docs/Introduction/README.md',
      sections: [
        {
          name: 'Como usar',
          content: './docs/Introduction/HowToUse.md',
        },
      ],
    },
    {
      name: 'Rodando a aplicação',
      content: './docs/GettingStarted/README.md',
      sections: [
        {
          name: 'Docker',
          content: './docs/GettingStarted/Docker.md',
        },
        {
          name: 'Node',
          content: './docs/GettingStarted/Node.md',
        },
      ],
    },
    {
      name: 'Rodando os Testes',
      content: './docs/RunningTests/README.md',
    },
    {
      name: 'Componentes',
      content: './docs/Components.md',
      components: path.join(__dirname, './src/components/**/*.tsx'),
    },
  ],
};
