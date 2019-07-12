const path = require('path')

exports.sourceNodes = ({ actions: { createTypes } }) => {
  createTypes(`
    type MoltinProduct implements Node {
      path: String!
    }
    type MoltinCategory implements Node {
      path: String!
    }
    type MoltinCollection implements Node {
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

exports.createPages = async ({ graphql, actions: { createPage } }, options) => {
  const {
    productsPath = 'products',
    collectionsPath = 'collections',
    categoriesPath = 'categories',
    brandsPath = 'brands',
  } = options

  const pages = await graphql(`
    {
      allProducts: allMoltinProduct {
        nodes {
          id
          path
        }
      }
      allCategories: allMoltinCategory {
        nodes {
          id
          path
        }
      }
      allCollections: allMoltinCollection {
        nodes {
          id
          path
        }
      }
      allBrands: allMoltinBrand {
        nodes {
          id
          path
        }
      }
    }
  `)

  pages.data.allProducts.nodes.forEach(({ id, path }) => {
    createPage({
      path,
      component: require.resolve(`./src/templates/ProductPage.js`),
      context: {
        id,
      },
    })
  })

  pages.data.allCategories.nodes.forEach(({ id, path }) => {
    createPage({
      path,
      component: require.resolve(`./src/templates/CategoryPage.js`),
      context: {
        id,
      },
    })
  })

  pages.data.allCollections.nodes.forEach(({ id, path }) => {
    createPage({
      path,
      component: require.resolve(`./src/templates/CollectionPage.js`),
      context: {
        id,
      },
    })
  })

  pages.data.allBrands.nodes.forEach(({ id, path }) => {
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
