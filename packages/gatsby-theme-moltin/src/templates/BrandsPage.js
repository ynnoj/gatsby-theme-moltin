import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BrandSection from '../components/BrandSection'

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

  return <React.Fragment>{brands.nodes.map(BrandSection)}</React.Fragment>
}

export default AllBrandsPage
