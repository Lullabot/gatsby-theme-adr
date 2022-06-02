const lunrOptions = {
  name: 'adr-pages',
  engine: 'lunr',
  query: `
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              context
            }
            fields {
              slug
            }
            rawBody
          }
        }
      }
    }
  `,
  index: ['title', 'context', 'body'],
  store: ['title', 'slug', 'context'],
  normalizer: ({ data }) =>
    data.allMdx.edges.map(({ node }) => ({
      id: node.id,
      title: node.frontmatter.title,
      context: node.frontmatter.context,
      slug: node.fields.slug,
      body: node.rawBody,
    })),
};

module.exports = lunrOptions;
