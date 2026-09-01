import React from 'react'
import './styles.css'
import { CartProvider } from './context/CartContext'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Categories from './components/Categories'
import CartDrawer from './components/CartDrawer'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
	<CartProvider>
	<div>
	  <NavBar />
		<div>
		{/* NavBar will render header */}
	  </div>

	  <main className="container">
		<Hero />

		<Menu />

		<About />

		<Testimonials />

		<Footer />
		<CartDrawer />

	  </main>

	  <footer style={{padding:'2rem 0',marginTop:'2rem',borderTop:'1px solid #f3f4f6'}}>
		<div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
		  <div>
			<div className="brand">CRAVE</div>
			<div className="lead">© {new Date().getFullYear()} CRAVE — All rights reserved</div>
		  </div>
		  <div>
			<nav aria-label="Footer">
			  <a style={{marginRight:12,color:'var(--muted)'}} href="#">Privacy</a>
			  <a style={{color:'var(--muted)'}} href="#">Contact</a>
			</nav>
		  </div>
		</div>
	  </footer>
	</div>
	</CartProvider>
  )
}
