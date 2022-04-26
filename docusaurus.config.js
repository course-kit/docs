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
        gtag: {
          trackingID: 'GTM-PPKDFCC',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://docs.coursekit.dev/" },
        { property: "og:title", content: "Introduction | CourseKit" },
        { property: "og:description", content: "CourseKit is a developer-first platform for creating online courses." },
        { property: "og:image", content: "https://docs.coursekit.dev/img/meta.png" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://docs.coursekit.dev/" },
        { property: "twitter:title", content: "Introduction | CourseKit" },
        { property: "twitter:description", content: "CourseKit is a developer-first platform for creating online courses." },
        { property: "twitter:image", content: "https://docs.coursekit.dev/img/meta.png" },
      ],
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
            label: 'Create account',
            position: 'right',
          },
          {
            label: 'Blog',
            href: 'https://coursekit.dev/blog',
            position: 'right'
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
                label: 'Create account',
                href: 'https://coursekit.dev',
              },
              {
                label: 'Blog',
                href: 'https://coursekit.dev/blog',
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
