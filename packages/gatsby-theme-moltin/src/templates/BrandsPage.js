import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Brand from '../components/Collection'

const allBrandsQuery = graphql`
  query {
    brands: allMoltinBrand {
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

const AllBrandsPage = () => {
  const { brands } = useStaticQuery(allBrandsQuery)

  return <React.Fragment>{brands.nodes.map(Brand)}</React.Fragment>
}

export default AllBrandsPage
