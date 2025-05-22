import React from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import AppProvider from './hooks'
import { Router } from './routes'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/stripeConfig'
import { Login } from './containers'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Elements>
      <GlobalStyles />
      <ToastContainer autoClose={2500} theme="dark" />
    </AppProvider>
  </React.StrictMode>
)
