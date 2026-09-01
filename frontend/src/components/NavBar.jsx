import React from 'react'
import { useCart } from '../context/CartContext'

export default function NavBar(){
  const { items } = useCart()
  const count = items.reduce((s,i)=>s + i.qty, 0)

  return (
	<header className="site-header">
	  <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
		<div style={{display:'flex',alignItems:'center',gap:12}}>
		  <div className="brand">CRAVE</div>
		  <nav aria-label="Primary" style={{display:'flex',gap:12}}>
			<a href="#menu" style={{color:'var(--muted)'}}>Menu</a>
			<a href="#about" style={{color:'var(--muted)'}}>About</a>
			<a href="#testimonials" style={{color:'var(--muted)'}}>Testimonials</a>
		  </nav>
		</div>

		<div style={{display:'flex',alignItems:'center',gap:12}}>
		  <button className="btn secondary">Sign up</button>
		  <button className="btn" aria-label="Open cart">
			Cart <span style={{marginLeft:8}} className="cart-indicator">{count}</span>
		  </button>
		</div>
	  </div>
	</header>
  )
}
