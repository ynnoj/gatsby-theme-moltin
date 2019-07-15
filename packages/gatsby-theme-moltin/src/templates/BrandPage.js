import React from 'react'
import { graphql } from 'gatsby'

import ProductGrid from '../components/ProductGrid'

const BrandPage = ({ data: { brand } }) => (
  <React.Fragment>
    <h1>{brand.name}</h1>
    <p>{brand.description}</p>

    <ProductGrid products={brand.products} />
  </React.Fragment>
)

export const query = graphql`
  query($id: String!) {
    brand: moltinBrand(id: { eq: $id }) {
      id
      name
      description
      products {
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

export default BrandPage
