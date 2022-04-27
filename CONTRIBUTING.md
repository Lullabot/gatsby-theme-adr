<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Theme ADR
</h1>

## 🔄 Contributing

This theme uses `yarn` workspaces to manage the theme and the example site that uses the theme.

In the `packages/` folder you will find:

  - `gatsby-theme-adr`: The theme itself. This is where most of the action happens during development and work on issues.
  - `example`: The example site that showcases the theme. This is where one can see the changes in the theme.

If you are familiar with <abbr title="Object Oriented Programming">OOP</abbr> you can think of the `gatsby-theme-adr` theme as a "class", and the `example` as the "object instance".

## 🛠 Set up

1. Clone this repo locally.
2. Install dependencies using `yarn`. This will install the project-wide dependencies, the theme dependencies, and the site dependencies.
3. Run `yarn develop`. This will run `gatsby develop` in the example site.

### Workspaces Considerations

If your task includes adding a new dependency you will need to know where to add it.

| Workspace | Use case                                                             | Command                                                       |
|----------|----------------------------------------------------------------------|---------------------------------------------------------------|
| Root     | This is for dependencies that apply globally. Ex: `eslint`.          | `yarn --ignore-workspace-root-check add my-dependency`        |
| Theme    | This is usually the case. Around 90% of the time.                    | `yarn workspace @lullabot/gatsby-theme-adr add my-dependency` |
| Site     | When you need some extra code for the example. Ex: some font family. | `yarn workspace example add my-dependency`                    |