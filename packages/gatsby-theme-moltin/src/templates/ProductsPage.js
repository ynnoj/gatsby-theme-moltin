import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import ProductGrid from '../components/ProductGrid'

const allProductsQuery = graphql`
  query {
    products: allMoltinProduct {
      nodes {
        name
        path
        id
        mainImage {
          childImageSharp {
            fixed(width: 560) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const AllProductsPage = () => {
  const { products } = useStaticQuery(allProductsQuery)

  return <ProductGrid products={products.nodes} />
}

export default AllProductsPage
