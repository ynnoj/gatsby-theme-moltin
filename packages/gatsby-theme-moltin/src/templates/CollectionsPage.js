import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import CollectionSection from '../components/CollectionSection'

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
  }
`

const AllCollectionsPage = () => {
  const { collections } = useStaticQuery(allCollectionsQuery)

  return (
    <React.Fragment>{collections.nodes.map(CollectionSection)}</React.Fragment>
  )
}

export default AllCollectionsPage
