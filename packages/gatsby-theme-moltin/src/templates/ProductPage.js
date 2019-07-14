import React from 'react'
import { graphql } from 'gatsby'

import ProductImage from '../components/ProductImage'

const ProductPage = ({ data: { product } }) => (
  <React.Fragment>
    <ProductImage src={product.mainImage} alt={product.name} />
    <h1>{product.name}</h1>
    <p>{product.meta.display_price.with_tax.formatted}</p>
  </React.Fragment>
)

export const query = graphql`
  query($id: String!) {
    product: moltinProduct(id: { eq: $id }) {
      id
      name
      mainImage {
        childImageSharp {
          fixed(width: 560) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      meta {
        display_price {
          with_tax {
            formatted
          }
        }
      }
    }
  }
`

export default ProductPage
