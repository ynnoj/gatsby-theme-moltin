import React from 'react'
import { Link } from 'gatsby'

import ProductGrid from '../components/ProductGrid'

const Collection = ({ id, path, name, description, products }) => {
  return (
    <section key={id}>
      <h2>
        <Link to={path}>{name}</Link>
      </h2>

      <p>{description}</p>
      <ProductGrid products={products} />
    </section>
  )
}

export default Collection
