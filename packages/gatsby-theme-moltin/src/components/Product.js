import React from 'react'
import { Link } from 'gatsby'

const Product = ({ id, path, name }) => (
  <article key={id}>
    <Link to={path}>
      <h1>{name}</h1>
    </Link>
  </article>
)

export default Product
