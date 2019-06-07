const path = require(`path`)

module.exports = themeOptions => {
  const { client_id } = themeOptions

  return {
    plugins: [
      {
        resolve: `@moltin/gatsby-source-moltin`,
        options: { client_id }
      },
      {
        resolve: `gatsby-plugin-compile-es6-packages`,
        options: {
          modules: [`gatsby-theme-moltin`]
        }
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, `src`, `pages`)
        }
      }
    ]
  }
}
