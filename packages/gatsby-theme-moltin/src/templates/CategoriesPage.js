import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import CategorySection from '../components/CategorySection'

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

const AllCategoriesPage = () => {
  const { categories } = useStaticQuery(allCategoriesQuery)

  return (
    <React.Fragment>{categories.nodes.map(CategorySection)}</React.Fragment>
  )
}

export default AllCategoriesPage
