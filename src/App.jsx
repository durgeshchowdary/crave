import React from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Checkout from './components/Checkout'

export default function App() {
  return (
	<CartProvider>
	  <div className="min-h-screen flex flex-col">
		<Navbar />
		<div className="flex-1 pt-24">
		  <Home />
		  <Checkout />
		</div>
		<Footer />
		<CartDrawer />
	  </div>
	</CartProvider>
  )
}
