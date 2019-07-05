import React from 'react'
import { graphql } from 'gatsby'

const BrandPage = ({ data: { brand } }) => (
  <React.Fragment>
    <h1>{brand.name}</h1>
    <p>{brand.description}</p>
  </React.Fragment>
)

export const query = graphql`
  query($id: String!) {
    brand: moltinBrand(id: { eq: $id }) {
      id
      name
      description
    }
  }
`

export default BrandPage
