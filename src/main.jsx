import React from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import {routes} from './routes'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
    <GlobalStyles />
    <ToastContainer autoClose={2500} theme='dark' />
  </React.StrictMode>
)
