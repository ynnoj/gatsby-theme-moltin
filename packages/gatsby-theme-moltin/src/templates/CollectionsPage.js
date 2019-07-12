import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Collection from '../components/Collection'

const allCollectionsQuery = graphql`
  query {
    collections: allMoltinCollection {
      nodes {
        id
        name
        description
        path
        products {
          name
          path
          id
        }
      }
    }
  }
`

const AllCollectionsPage = () => {
  const { collections } = useStaticQuery(allCollectionsQuery)

  return <React.Fragment>{collections.nodes.map(Collection)}</React.Fragment>
}

export default AllCollectionsPage
