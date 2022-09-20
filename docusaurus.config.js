// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "taggy",
  tagline: "helps you tag your content",
  url: "https://open-taggy.github.io",
  baseUrl: "website/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "open-taggy", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  trailingSlash: false,
  // deploymentBranch: "public",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "taggy",
        logo: {
          alt: "taggy Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/open-taggy",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [
        //       {
        //         label: "Documentation",
        //         to: "/docs/intro",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       // {
        //       //   label: "Stack Overflow",
        //       //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //       // },
        //       {
        //         label: "Discord",
        //         href: "https://discordapp.com/invite/docusaurus",
        //       },
        //       {
        //         label: "Twitter",
        //         href: "https://twitter.com/docusaurus",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/facebook/docusaurus",
        //       },
        //     ],
        //   },
        // ],
        copyright:
          `Icons: <a href="https://thenounproject.com/browse/icons/term/open/">Open</a> by Ilham Fitrotul Hayat | <a href="https://thenounproject.com/browse/icons/term/scooter/"> Scooter</a> by Guilhem | <a href="https://thenounproject.com/browse/icons/term/plug-connector/">Plug connector</a> by rizal anggara putra | <a href="https://thenounproject.com/browse/icons/term/open/"> play </a> by MOCROIS | All from <a href="https://thenounproject.com/" target="_blank" title="The Noun Project">Noun Project</a>` +
          `<br /> <br />` +
          `Copyright © ${new Date().getFullYear()} by taggy 🐓 | Supported by <a href="https://media-tech-lab.de">Media Tech Lab</a> by Media Lab Bayern.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
// Scooter by Guilhem from <a href="https://thenounproject.com/browse/icons/term/scooter/" target="_blank" title="Scooter Icons">Noun Project</a>
// Plug connector by rizal anggara putra from <a href="https://thenounproject.com/browse/icons/term/plug-connector/" target="_blank" title="Plug connector Icons">Noun Project</a>

module.exports = config;
