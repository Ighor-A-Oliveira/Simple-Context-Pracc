import React from 'react'
import { CounterProvider } from './Context'
import CartProvider from './CartContext'

export default function AppProvider({children}) {
  return (
    <CounterProvider>
        <CartProvider>
            {children}
        </CartProvider>
    </CounterProvider>
  )
}
