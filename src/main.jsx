import React from 'react'
import { createRoot } from 'react-dom/client'
import Login from '../src/containers/Login'
import GlobalStyles from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <ToastContainer autoClose={2500} theme='dark' />
    <Login />
  </React.StrictMode>
)
