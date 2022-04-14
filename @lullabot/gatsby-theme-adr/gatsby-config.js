const defaultLunrOptions = require('./config/lunrOptions');
const defaultFeedOptions = require('./config/feedOptions');

module.exports = ({
  contentPath = 'adr',
  lunrOptions = defaultLunrOptions,
  feedOptions = defaultFeedOptions,
  siteMetadata = {},
  postCssOptions = {
    postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
    cssLoaderOptions: {},
  },
}) => ({
  jsxRuntime: 'automatic',
  siteMetadata,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-postcss',
      options: postCssOptions,
    },
    'gatsby-plugin-remove-generator',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'adrs',
        path: `./${contentPath || 'adr'}/`,
      },
      __key: 'adrs',
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: '<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>',
              removeAccents: true,
            },
          },
        ],
        defaultLayouts: {
          default: require.resolve('./src/templates/AdrTemplate.tsx'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: lunrOptions || defaultLunrOptions,
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-redirect-from',
      options: {
        query: 'allMdx',
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: feedOptions || defaultFeedOptions,
    },
    'gatsby-plugin-meta-redirect', // make sure this is always the last one,
  ],
});
