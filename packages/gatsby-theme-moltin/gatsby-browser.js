import React from 'react'

import { MoltinProvider } from './src/context/MoltinContext'
import LayoutProvider from './src/components/LayoutProvider'

export const wrapRootElement = ({ element }) => (
  <MoltinProvider clientId={process.env.GATSBY_MOLTIN_CLIENT_ID}>
    <LayoutProvider>{element}</LayoutProvider>
  </MoltinProvider>
)
