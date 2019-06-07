import React from 'react'
import { graphql } from 'gatsby'

const ProductPage = ({ data: { product } }) => (
  <React.Fragment>
    <h1>{product.name}</h1>
    <p>{product.meta.display_price.with_tax.formatted}</p>
  </React.Fragment>
)

export const query = graphql`
  query($id: String!) {
    product: moltinProduct(id: { eq: $id }) {
      id
      name
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
