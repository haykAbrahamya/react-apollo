import React from 'react'

import { apollo } from '../apollo'
import { ApolloProvider } from "@apollo/client"
import { Routes } from './components/Routes'

export const App = () => {
  return (
    <ApolloProvider client={apollo}>
      <Routes />
    </ApolloProvider>
  )
}