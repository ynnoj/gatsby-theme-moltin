import React from 'react'
import { graphql } from 'gatsby'

import ProductGrid from '../components/ProductGrid'

const CollectionPage = ({ data: { collection } }) => (
  <React.Fragment>
    <h1>{collection.name}</h1>
    <p>{collection.description}</p>

    <ProductGrid products={collection.products} />
  </React.Fragment>
)

export const query = graphql`
  query($id: String!) {
    collection: moltinCollection(id: { eq: $id }) {
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

export default CollectionPage
