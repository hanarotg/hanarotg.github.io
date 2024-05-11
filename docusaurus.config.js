// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TaeGyeong Lee",
  tagline: "Engineer",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://hanarotg.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hanarotg", // Usually your GitHub org/user name.
  projectName: "hanarotg.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        disableInDev: false,
      },
    ],
    "docusaurus-plugin-zooming",
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-PSM1SDYJFY",
        },
        googleTagManager: {
          containerId: "GTM-5SML85MT",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "TaeGyeong Lee",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        hideOnScroll: true,
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "문서",
          },
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://github.com/hanarotg",
            position: "right",
            className: "header-github-link",
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          "json",
          "bash",
          "dart",
          "go",
          "http",
          "kotlin",
          "cpp",
          "gradle",
          "groovy",
        ],
      },
      algolia: {
        appId: "DF0NWM7N23",
        apiKey: "89bcb92461d9c240e2eaf25ebf327064",
        indexName: "hanarotgio",
        contextualSearch: false,
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
