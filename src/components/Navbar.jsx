import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)

  return (
	<header className="fixed w-full z-40 bg-page backdrop-blur-md border-b border-crave">
	  <nav className="max-w-6xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
		<div className="flex items-center gap-6">
			<a href="#home" className="flex items-end gap-3">
			<div className="text-2xl font-display text-[var(--accent)]">CRAVE</div>
			<div className="text-sm text-secondary">Bites</div>
		  </a>

			<div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
			<a href="#menu" className="hover:text-primary transition">Menu</a>
			<a href="#about" className="hover:text-primary transition">About</a>
			<a href="#testimonials" className="hover:text-primary transition">Testimonials</a>
		  </div>
		</div>

		<div className="flex items-center gap-4">
		  <button aria-label="Open cart" className="relative inline-flex items-center gap-3 px-3 py-2 rounded-full bg-elev border border-crave shadow-sm hover:shadow-md focus-ring">
			<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
			  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
			</svg>
			<span className="sr-only">Cart</span>
			<span className="inline-flex items-center justify-center ml-1 px-2 py-0.5 text-xs font-semibold" style={{ backgroundColor: 'var(--accent)', color: 'white', borderRadius: 999 }}>{count}</span>
		  </button>

		  <a href="#menu" className="btn-brand hidden md:inline-flex">Order Now</a>

			<button onClick={() => setOpen(o => !o)} className="md:hidden p-2 rounded-lg bg-elev border border-crave" aria-label="Toggle menu">
			<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		  </button>
		</div>
	  </nav>

	  {/* Mobile slide-down menu */}
	  <div className={`md:hidden transition-max-h duration-300 overflow-hidden ${open ? 'max-h-60' : 'max-h-0'}`}>
		<div className="px-6 pb-4 flex flex-col gap-3 bg-section border-t border-crave">
		  <a href="#menu" onClick={() => setOpen(false)} className="py-2 text-secondary hover:text-primary">Menu</a>
		  <a href="#about" onClick={() => setOpen(false)} className="py-2 text-secondary hover:text-primary">About</a>
		  <a href="#testimonials" onClick={() => setOpen(false)} className="py-2 text-secondary hover:text-primary">Testimonials</a>
		</div>
	  </div>
	</header>
  )
}
