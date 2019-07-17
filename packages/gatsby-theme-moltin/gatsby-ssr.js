import React from 'react'

import { CartProvider } from './src/context/CartContext'
import LayoutProvider from './src/components/LayoutProvider'

export const wrapRootElement = ({ element }) => (
  <CartProvider clientId={process.env.GATSBY_MOLTIN_CLIENT_ID}>
    <LayoutProvider>{element}</LayoutProvider>
  </CartProvider>
)
