module.exports = {
  plugins: [
    {
      resolve: '@lullabot/gatsby-theme-adr',
      options: {
        contentPath: 'adrs',
        siteMetadata: {
          siteUrl: 'https://architecture.my-company.com',
          title: "My Company's Architecture Decision Records",
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
      },
    },
  ],
};
