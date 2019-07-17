import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'

import ProductImage from './ProductImage'

const Product = ({ id, path, name, mainImage }) => (
  <article key={id}>
    <Link to={path}>
      <ProductImage src={mainImage} alt={name} title={name} />
    </Link>

    <Link to={path}>
      <Styled.h1>{name}</Styled.h1>
    </Link>
  </article>
)

export default Product
