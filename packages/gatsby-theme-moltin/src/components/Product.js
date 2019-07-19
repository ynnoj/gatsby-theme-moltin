import React, { useContext } from 'react'
import { Link } from 'gatsby'

import CartContext from '../context/CartContext'
import ProductImage from './ProductImage'

const Product = ({ id, path, name, mainImage }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <article key={id}>
      <Link to={path}>
        <ProductImage src={mainImage} alt={name} title={name} />
      </Link>

      <Link to={path}>
        <h1>{name}</h1>
      </Link>

      <button onClick={() => addToCart(id, 1)}>Add to Cart</button>
    </article>
  )
}

export default Product
