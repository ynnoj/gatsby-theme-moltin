import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Category from '../components/Collection'

const allCategoriesQuery = graphql`
  query {
    categories: allMoltinCategory {
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

const AllCategoriesPage = () => {
  const { categories } = useStaticQuery(allCategoriesQuery)

  return <React.Fragment>{categories.nodes.map(Category)}</React.Fragment>
}

export default AllCategoriesPage
