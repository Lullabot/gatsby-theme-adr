module.exports = {
  plugins: [
    {
      resolve: '@lullabot/gatsby-theme-adr',
      options: {
        contentPath: 'adrs',
        trailingSlash: 'always',
        siteMetadata: {
          siteUrl: 'https://architecture.my-company.com',
          title: "My Company's Architecture Decision Records",
          description:
            'Welcome to the architecture knowledge base of My Company. You will find here all the Architecture Decision Records (ADR) of the project.',
          image: '/icons/icon-192x192.png',
          menuLinks: [
            { name: 'Home', uri: '/', iconName: 'HomeIcon' },
            { name: 'All ADRs', uri: '/adrs', iconName: 'CollectionIcon' },
            {
              name: 'Docs ADRs',
              uri: '/adrs/documentation',
              iconName: 'AnnotationIcon',
            },
          ],
          socialLinks: [
            {
              name: 'RSS',
              uri: 'https://www.my-company.com/rss/feed',
              iconName: 'rss',
            },
            { name: 'GitHub', uri: 'https://www.github.com/my-company' },
            {
              name: 'Twitter',
              uri: 'https://www.twitter.com/my-company',
            },
            {
              name: 'Facebook',
              uri: 'https://www.facebook.com/my-companys/',
            },
            {
              name: 'LinkedIn',
              uri: 'https://www.linkedin.com/company/my-company',
            },
            {
              name: 'YouTube',
              uri: 'https://www.youtube.com/c/my-company',
            },
            {
              name: 'Terms of Service',
              uri: 'https://www.my-company.com/terms',
            },
          ],
        },
        postCssOptions: {
          postCssPlugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
  ],
};
