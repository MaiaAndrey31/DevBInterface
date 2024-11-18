import React from 'react'
import { createRoot } from 'react-dom/client'
import Login from '../src/containers/Login'
import GlobalStyles from './styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Login />
  </React.StrictMode>
)
