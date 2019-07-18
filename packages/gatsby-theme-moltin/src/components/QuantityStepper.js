import React, { useContext } from 'react'

import CartContext from '../context/CartContext'

const QuantityStepper = ({ itemId, quantity }) => {
  const { updateQuantity } = useContext(CartContext)

  const increase = () => updateQuantity(itemId, quantity + 1)
  const decrease = () => updateQuantity(itemId, quantity - 1)

  return (
    <div>
      {quantity !== 1 && <button onClick={decrease}>-</button>}

      <span>{quantity}</span>

      <button onClick={increase}>+</button>
    </div>
  )
}

export default QuantityStepper
