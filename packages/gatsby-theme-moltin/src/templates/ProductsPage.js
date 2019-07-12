import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import ProductGrid from '../components/ProductGrid'

const allProductsQuery = graphql`
  query {
    products: allMoltinProduct {
      nodes {
        id
        name
        path
      }
    }
  }
`

const AllProductsPage = () => {
  const { products } = useStaticQuery(allProductsQuery)

  return <ProductGrid products={products.nodes} />
}

export default AllProductsPage
