import React from 'react'
import { graphql } from 'gatsby'

const CategoryPage = ({ data: { category } }) => (
  <React.Fragment>
    <h1>{category.name}</h1>
    <p>{category.description}</p>
  </React.Fragment>
)

export const query = graphql`
  query($id: String!) {
    category: moltinCategory(id: { eq: $id }) {
      id
      name
      description
    }
  }
`

export default CategoryPage
