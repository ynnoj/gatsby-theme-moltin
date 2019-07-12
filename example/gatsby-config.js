require(`dotenv`).config()

module.exports = {
  plugins: [
    {
      resolve: `@moltin/gatsby-theme-moltin`,
      options: {
        clientId: process.env.MOLTIN_CLIENT_ID,
      },
    },
  ],
}
