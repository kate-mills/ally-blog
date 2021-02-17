module.exports = {
    siteMetadata: {
      title: `Ally Blog`,
      titleTemplate: `%s | Ally Blog`,
      description: `A blog full of helpful list about web development.`,
      url: `https://allyblog.app`,
      dateCreated: `2021-01-01T08:00:00.000Z`,
      datePublished: `2021-02-02T08:00:00.000Z`,
      dateModified: `${new Date().toISOString()}`,
      image: `mainImg.jpg`, // must be in static/
      twitterUsername: `@katie_napa`,
      siteUrl: `https://allyblog.app`,
      organization: {
        name:`Ally Digital Solutions`,
        url: `https://allyblog.app`,
        logo: `https://allyblog.app/ab-logo.png`,
        siteImg:`https://allyblog.app/mainImg.jpg`,
      },
    },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
       resolve: `gatsby-plugin-mdx`,
       options: {
         gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
       },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['400', '700'],
            },
            { family: 'Open Sans' },
          ],
        },
      },
    },
   {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ally Digital Solutions Blog",
        short_name: "Ally Blog",
        start_url: "/",
        background_color: "#ffff",
        theme_color: "#F0B4B4",
        display: "standalone",
        icon: "src/assets/icon.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
