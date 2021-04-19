import React from 'react'
import {Provider} from 'react-redux'
import { Products } from 'components/Products'
import { Cart } from 'components/Cart'

import { cart } from './reducers/cart'
import { products } from './reducers/products'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

const store = configureStore({ reducer })

export const App = () => (
  <Provider store={store}>
    <Cart />
    <Products />
  </Provider>
)
