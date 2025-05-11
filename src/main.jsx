import React from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import {routes} from './routes'
import AppProvider from './hooks'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>      
    <RouterProvider router={routes}/>
    <GlobalStyles />
    <ToastContainer autoClose={2500} theme='dark' />
    </AppProvider>
  </React.StrictMode>
)
