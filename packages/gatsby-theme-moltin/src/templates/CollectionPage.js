import React from 'react'
import { graphql } from 'gatsby'

const CollectionPage = ({ data: { collection } }) => (
  <React.Fragment>
    <h1>{collection.name}</h1>
    <p>{collection.description}</p>
  </React.Fragment>
)

export const query = graphql`
  query($id: String!) {
    collection: moltinCollection(id: { eq: $id }) {
      id
      name
      description
    }
  }
`

export default CollectionPage
