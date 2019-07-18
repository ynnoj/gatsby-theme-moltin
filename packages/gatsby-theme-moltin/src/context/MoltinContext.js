import React, { createContext } from 'react'
import { MoltinClient } from '@moltin/request'

import MoltinLocalStorageAdapter from '../utils/MoltinLocalStorageAdapter'
import { CartProvider } from './CartContext'

let MoltinContext

const { Provider, Consumer } = (MoltinContext = createContext())

const MoltinProvider = ({ clientId, children, ...props }) => {
  const moltin = new MoltinClient({
    client_id: clientId,
    application: 'gatsby-theme-moltin',
    storage: new MoltinLocalStorageAdapter(),
  })

  return (
    <Provider
      value={{
        ...props,
        moltin,
      }}
    >
      <CartProvider>{children}</CartProvider>
    </Provider>
  )
}

export { MoltinProvider, Consumer as MoltinConsumer, MoltinContext as default }
