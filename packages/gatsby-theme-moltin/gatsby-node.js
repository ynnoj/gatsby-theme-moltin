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

  createResolvers({
    MoltinProduct: {
      path: {
        resolve: source => path.join(basePath, 'products', source.slug),
      },
    },
    MoltinCollection: {
      path: {
        resolve: source => path.join(basePath, 'collections', source.slug),
      },
    },
    MoltinCategory: {
      path: {
        resolve: source => path.join(basePath, 'categories', source.slug),
      },
    },
    MoltinBrand: {
      path: {
        resolve: source => path.join(basePath, 'brands', source.slug),
      },
    },
  })
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // Get the below from plugin options later
  const productsPath = 'products'
  const categoriesPath = 'categories'
  const collectionsPath = 'collections'
  const brandsPath = 'brands'

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

  createPage({
    path: productsPath,
    component: require.resolve(`./src/templates/ProductsPage.js`),
  })

  createPage({
    path: categoriesPath,
    component: require.resolve(`./src/templates/CategoriesPage.js`),
  })

  createPage({
    path: collectionsPath,
    component: require.resolve(`./src/templates/CollectionsPage.js`),
  })

  createPage({
    path: brandsPath,
    component: require.resolve(`./src/templates/BrandsPage.js`),
  })
}
