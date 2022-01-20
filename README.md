<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Theme ADR
</h1>

## 🚀 Add an ADR website to your software project

1. **Create a `/docs` folder in your repository**

   Create the directory to hold your ADRs, and initialize the website.

    ```shell
    # Download the boilerplate project so we can tweak it.
    npx degit github:e0ipso/adr-website-example docs
    cd docs
   
    # Install the documentation site.
    npm install
    # Run the development server.
    npm run-script develop
    ```

2. **Change customize the Look & Feel**

    * This project uses Gatsby. This means that you can override any or the
      components here using a technique
      called [component shadowing](https://www.gatsbyjs.com/blog/2019-04-29-component-shadowing/)
      . The boilerplate you downloaded contains examples of that. See the
      contents of the `src/@lullabot/gatsby-theme-adr` to change the copyright
      information the menu title, etc.

    * Additionally, you will need to change the images in `src/images` to
      include the logo for your project.

    * Finally, edit `gatsby.config.js` to remove references to "My Company" and
      use your project's info instead.

3. (Optional) **Move Tugboat integration to your project root**

   If you want to preview your site documentation in
   your [Tugboat](https://tugboat.qa)
   previews, you can use the configuration in the `.tugboat` directory.

   If you already use Tugboat adapt your project configuration to _add_ the
   service for the ADR website instead.

    ```shell
    mv .tugboat ../
    ```

4. **Open the code and start customizing!**

   Your site is now running at http://localhost:8000!

   Edit `src/pages/index.jsx` to see your site update in real-time!

## 💠 Deploy and update the site automatically

Depending on the CI you use and where you publish the ADR site this process will
differ.

Here is an example that assumes you use _GitHub Actions_ for CI and _GitHub Pages_ to host the static site.

Add a workflow for your repository in `.github/worflows/gh-pages.yml` with the
following contents:

```yaml
name: website

on:
  push:
    # Update this to your branch name.
    branches: [ main ]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install package dependencies
        run: npm ci
      - name: Build Gatsby site
        run: npm run-script build
      - name: Deploy to GitHub Pages
        if: success()
        uses: crazy-max/ghaction-github-pages@v2
        with:
          target_branch: gh-pages
          build_dir: docs/public
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
