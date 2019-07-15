import React from 'react'
import { graphql } from 'gatsby'

import ProductGrid from '../components/ProductGrid'

const CategoryPage = ({ data: { category } }) => (
  <React.Fragment>
    <h1>{category.name}</h1>
    <p>{category.description}</p>

    <ProductGrid products={category.products} />
  </React.Fragment>
)

export const query = graphql`
  query($id: String!) {
    category: moltinCategory(id: { eq: $id }) {
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

export default CategoryPage
