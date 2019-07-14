const path = require(`path`)

module.exports = themeOptions => {
  const { client_id, clientId } = themeOptions

  return {
    plugins: [
      {
        resolve: `@moltin/gatsby-source-moltin`,
        options: { client_id: client_id || clientId },
      },
      {
        resolve: `gatsby-plugin-compile-es6-packages`,
        options: {
          modules: [`gatsby-theme-moltin`],
        },
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, `src`, `pages`),
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ],
  }
}
