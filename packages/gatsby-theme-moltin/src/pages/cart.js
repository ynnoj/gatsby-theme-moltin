import React, { useContext } from 'react'

import CartContext from '../context/CartContext'

const CartPage = () => {
  const { isEmpty, items, meta } = useContext(CartContext)

  return (
    <React.Fragment>
      <pre>{JSON.stringify({ items, meta }, null, 2)}</pre>
      {isEmpty && <p>The cart is empty</p>}
    </React.Fragment>
  )
}

export default CartPage
