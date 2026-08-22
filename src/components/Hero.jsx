import React from 'react'
import ImageWithFallback from './ImageWithFallback'

export default function Hero() {
	return (
	<section id="home" className="hero-section bg-page pt-20">
	  <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
		<div>
		  <h1 className="hero-title">Savor the craft. <span style={{ color: 'var(--accent)' }}>Crave</span> the flavor.</h1>
		  <p className="mt-5 hero-sub">Chef-inspired dishes, curated ingredients, and fast delivery. CRAVE brings premium flavors to your doorstep with a menu that's both comforting and bold.</p>

		  <div className="mt-6 flex items-center gap-4">
			<a href="#menu" className="btn-brand shadow-lg">Order Now</a>
			<a href="#about" className="btn-ghost">Our Story</a>
		  </div>
		</div>

		<div className="relative flex items-center justify-center">
		  <div className="w-full max-w-2xl rounded-3xl overflow-hidden shadow-soft transform hover:scale-102 transition duration-500">
			<ImageWithFallback src="https://images.unsplash.com/photo-1543352634-2c4f3b9f0ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" alt="Signature dish" className="w-full h-[420px] object-cover rounded-3xl" />
		  </div>

		  {/* subtle dark glow */}
		  <div className="hidden lg:block absolute -left-16 -top-10 w-60 h-60 rounded-full" style={{boxShadow: '0 30px 80px rgba(0,0,0,0.6)'}} />
		</div>
	  </div>
	</section>
  )
}
