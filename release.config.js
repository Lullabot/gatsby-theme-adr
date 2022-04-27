module.exports = {
  branches: ['main'],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        pkgRoot: './packages/gatsby-theme-adr',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'dist/gatsby-theme-adr.tar.gz',
            label: 'Tarball with the code for the Gatsby Theme ADR',
          },
        ],
      },
    ],
  ],
};
