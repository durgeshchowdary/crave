import React from 'react'

export default function Footer() {
	return (
	<footer className="mt-16" style={{ backgroundColor: 'var(--footer)', color: 'var(--text-secondary)' }}>
	  <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
		<div>
		  <div className="text-2xl font-display font-bold" style={{ color: 'var(--accent)' }}>CRAVE</div>
		  <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>Fresh ingredients. Bold flavors. Fast delivery.</p>
		</div>

		<div>
			<div className="font-semibold section-title" style={{ color: 'var(--text)' }}>Explore</div>
		  <ul className="mt-3 space-y-2" style={{ color: 'var(--text-secondary)' }}>
			<li><a href="#menu" className="hover:text-white">Menu</a></li>
			<li><a href="#about" className="hover:text-white">About</a></li>
			<li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
		  </ul>
		</div>

		<div>
		  <div className="font-semibold" style={{ color: 'var(--text)' }}>Contact</div>
		  <div className="mt-3" style={{ color: 'var(--text-secondary)' }}>hello@crave.example<br/>+1 (555) 123-4567</div>
		  <div className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>© {new Date().getFullYear()} CRAVE. All rights reserved.</div>
		</div>
	  </div>
	</footer>
  )
}
