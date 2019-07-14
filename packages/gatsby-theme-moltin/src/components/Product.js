import React from 'react'
import { Link } from 'gatsby'

import ProductImage from './ProductImage'

const Product = ({ id, path, name, mainImage }) => (
  <article key={id}>
    <Link to={path}>
      <ProductImage src={mainImage} alt={name} title={product.name} />
    </Link>

    <Link to={path}>
      <h1>{name}</h1>
    </Link>
  </article>
)

export default Product
