import { Route, Routes } from 'react-router-dom'
import {
  Cart,
  Home,
  Menu,
  Register,
  Login,
  Checkout,
  CompleteOrder,
  Orders,
  NewProduct,
  EditProducts,
  Products,
  
} from '../containers'
import { AdminLayout } from '../layouts/AdminLayout'
import { UserLayout } from '../layouts/UserLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete" element={<CompleteOrder />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/newproduct" element={<NewProduct />} />
        <Route path="/admin/editproducts" element={<EditProducts />} />
        <Route path="/admin/products" element={<Products />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  )
}
//
//   {
//     path: '/complete',
//     element: <CompleteOrder />
//   }
// ])
