module.exports = {
    siteMetadata: {
      title: `Ally Blog`,
      titleTemplate: `%s | Ally Blog`,
      description: `A blog about web development.`,
      url: `https://allydigitalblog.netlify.app`,
      image: `blogging.png`, // must be in static/
      twitterUsername: `@katie_napa`,
    },
  plugins: [
    //`gatsby-plugin-mgatsby-remark-imagesdx`,
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
  ],
}
