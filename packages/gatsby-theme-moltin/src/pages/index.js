import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import ProductGrid from '../components/ProductGrid'

const IndexPage = () => {
  const { products } = useStaticQuery(graphql`
    query {
      products: allMoltinProduct {
        edges {
          node {
            id
            name
            slug
            path
          }
        }
      }
    }
  `)

  return (
    <ProductGrid
      products={products.edges.map(({ node: product }) => product)}
    />
  )
}

export default IndexPage
