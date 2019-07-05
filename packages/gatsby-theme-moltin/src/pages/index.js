import React from 'react'
import { graphql } from 'gatsby'

import ProductGrid from '../components/ProductGrid'

const IndexPage = ({ data: { products } }) => (
  <ProductGrid products={products.edges.map(({ node: product }) => product)} />
)

export const query = graphql`
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
`

export default IndexPage
