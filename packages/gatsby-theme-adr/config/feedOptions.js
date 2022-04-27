module.exports = {
  query: `
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `,
  feeds: [
    {
      serialize: ({ query: { site, allMdx } }) => {
        return allMdx.edges.map((edge) => {
          const siteUrl = site.siteMetadata.siteUrl;
          return {
            title: edge.node.frontmatter.title,
            description: edge.node.frontmatter.deck,
            guid: `${siteUrl}${edge.node.fields.slug}`,
            custom_elements: [
              {
                link: `${siteUrl}${edge.node.fields.slug}`,
              },
              { category: `[${edge.node.frontmatter.tags.join(',')}]` },
              {
                pubDate: edge.node.frontmatter.date,
              },
            ],
          };
        });
      },
      query: `
        {
          allMdx(
            sort: { order: DESC, fields: [frontmatter___date] },
          ) {
            edges {
              node {
                frontmatter {
                  title
                  deck
                  date(formatString: "ddd, D MMM YYYY h:mm:ss ZZ")
                  tags
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `,
      output: '/rss.xml',
      generator: 'Lullabot Gatsby Theme ADR',
      title: 'All ADRs RSS feed',
    },
  ],
};
