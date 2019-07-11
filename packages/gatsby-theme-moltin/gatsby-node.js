const path = require('path')

exports.sourceNodes = ({ actions: { createTypes } }) => {
  createTypes(`
    type MoltinProduct implements Node {
      path: String!
    }
    type MoltinCollection implements Node {
      path: String!
    }
    type MoltinCategory implements Node {
      path: String!
    }
    type MoltinBrand implements Node {
      path: String!
    }
  `)
}

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || '/'
  const {
    productsPath = 'products',
    collectionsPath = 'collections',
    categoriesPath = 'categories',
    brandsPath = 'brands',
  } = options

  createResolvers({
    MoltinProduct: {
      path: {
        resolve: source => path.join(basePath, productsPath, source.slug),
      },
    },
    MoltinCollection: {
      path: {
        resolve: source => path.join(basePath, collectionsPath, source.slug),
      },
    },
    MoltinCategory: {
      path: {
        resolve: source => path.join(basePath, categoriesPath, source.slug),
      },
    },
    MoltinBrand: {
      path: {
        resolve: source => path.join(basePath, brandsPath, source.slug),
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
            path
          }
        }
      }
      allCategories: allMoltinCategory {
        edges {
          node {
            id
            path
          }
        }
      }
      allCollections: allMoltinCollection {
        edges {
          node {
            id
            path
          }
        }
      }
      allBrands: allMoltinBrand {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `)

  pages.data.allProducts.edges.forEach(({ node: { id, path } }) => {
    createPage({
      path,
      component: require.resolve(`./src/templates/ProductPage.js`),
      context: {
        id,
      },
    })
  })

  pages.data.allCategories.edges.forEach(({ node: { id, path } }) => {
    createPage({
      path,
      component: require.resolve(`./src/templates/CategoryPage.js`),
      context: {
        id,
      },
    })
  })

  pages.data.allCollections.edges.forEach(({ node: { id, path } }) => {
    createPage({
      path,
      component: require.resolve(`./src/templates/CollectionPage.js`),
      context: {
        id,
      },
    })
  })

  pages.data.allBrands.edges.forEach(({ node: { id, path } }) => {
    createPage({
      path,
      component: require.resolve(`./src/templates/BrandPage.js`),
      context: {
        id,
      },
    })
  })
}
