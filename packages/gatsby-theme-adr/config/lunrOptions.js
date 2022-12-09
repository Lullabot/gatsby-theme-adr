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
              deck
            }
            fields {
              slug
            }
            body
          }
        }
      }
    }
  `,
  index: ['title', 'deck', 'body'],
  store: ['title', 'slug', 'deck'],
  normalizer: ({ data }) =>
    data.allMdx.edges.map(({ node }) => ({
      id: node.id,
      title: node.frontmatter.title,
      deck: node.frontmatter.deck,
      slug: node.fields.slug,
      body: node.body,
    })),
};

module.exports = lunrOptions;
