module.exports = {
  pathPrefix: '/cultural',
  siteMetadata: {
    title: `Cultural by Legado8`,
    name: `Cultural`,
    siteUrl: `https://cultural.legado8.org`,
    description: `Cultural Magazine by Legado8`,
    hero: {
      heading: `Bienvenido a Cultural, la revista digital libre de Legado8.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/legado8`,
      },
      {
        name: `github`,
        url: `https://github.com/legado8`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/legado8`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cultural by Legado8`,
        short_name: `cultural`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
