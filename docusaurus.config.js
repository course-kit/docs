// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CourseKit',
  url: 'https://docs.coursekit.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',
  organizationName: 'coursekit', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CourseKit Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon_2x.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'quick-start/quick-start',
            position: 'left',
            label: 'Quick start guide',
          },
          {
            type: 'doc',
            docId: 'javascript-client',
            position: 'left',
            label: 'JavaScript client',
          },
          {
            href: 'https://coursekit.dev',
            label: 'CourseKit',
            position: 'right',
          },
          {
            href: 'https://github.com/course-kit',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick start guide',
                to: '/quick-start',
              },
              {
                label: 'JavaScript client',
                to: '/client',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/ugXJFkw6hv',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/CourseKitDev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'CourseKit',
                href: 'https://coursekit.dev',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/course-kit',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CourseKit`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
