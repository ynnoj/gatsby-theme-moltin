const path = require('path')

exports.sourceNodes = ({ actions: { createTypes } }) => {
  createTypes(`
    type MoltinProduct implements Node {
      pathSlug: String!
    }
  `)
}

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || '/'

  createResolvers({
    MoltinProduct: {
      pathSlug: {
        resolve: source => path.join(basePath, 'products', source.slug),
      },
    },
  })
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = await graphql(`
    {
      allProducts: allMoltinProduct {
        edges {
          node {
            id
            pathSlug
          }
        }
      }
    }
  `)

  pages.data.allProducts.edges.forEach(({ node: { id, pathSlug } }) => {
    createPage({
      path: pathSlug,
      component: require.resolve(`./src/templates/ProductPage.js`),
      context: {
        id,
      },
    })
  })
}
