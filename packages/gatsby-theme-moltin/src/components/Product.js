import React from 'react'
import { Link } from 'gatsby'

const Product = ({ id, slug, name }) => (
  <article key={id}>
    <Link to={`/products/${slug}`}>
      <h1>{name}</h1>
    </Link>
  </article>
)

export default Product
