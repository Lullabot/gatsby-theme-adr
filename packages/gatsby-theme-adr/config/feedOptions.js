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
            description: edge.node.frontmatter.context,
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
          allMdx(sort: {frontmatter: {date: DESC}}) {
            edges {
              node {
                frontmatter {
                  title
                  context
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
