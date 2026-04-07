import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './CartContext'  // 👈 add this

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>   {/* 👈 wrap pannunga */}
      <App />
    </CartProvider>
  </React.StrictMode>
)