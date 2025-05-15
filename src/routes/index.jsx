import { createBrowserRouter } from 'react-router-dom'

import { Header, Footer } from '../components'
import { Cart, Home, Menu, Register, Login, Checkout, CompleteOrder } from '../containers'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    )
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Register />
  },
  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />
        <Footer />
      </>
    )
  },
  {
    path: '/carrinho',
    element: <Cart />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: '/complete',
    element: <CompleteOrder />
  }
])
