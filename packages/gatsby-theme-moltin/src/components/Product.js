import React from 'react'
import { Link } from 'gatsby'

const Product = ({ id, pathSlug, name }) => (
  <article key={id}>
    <Link to={pathSlug}>
      <h1>{name}</h1>
    </Link>
  </article>
)

export default Product
