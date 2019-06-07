require(`dotenv`).config()

module.exports = {
  __experimentalThemes: [
    {
      resolve: `@moltin/gatsby-theme-moltin`,
      options: {
        client_id: process.env.MOLTIN_CLIENT_ID
      }
    }
  ]
}
