import React from 'react'

export default function About() {
	return (
	<section id="about" className="py-16 bg-section">
	  <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
		<div className="order-2 lg:order-1">
		  <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="About us" className="w-full h-80 object-cover rounded-2xl shadow-soft" onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'}} />
		</div>
		<div className="order-1 lg:order-2">
			<h2 className="section-title">Crafted with care</h2>
		  <p className="mt-4 lead">At CRAVE we obsess over the details — from sourcing seasonal produce to refining our recipes. Every dish is prepared to deliver bold flavor and consistent quality.</p>
		  <ul className="mt-4 space-y-2 text-secondary">
			<li>• Fresh ingredients sourced locally</li>
			<li>• Chef-driven recipes</li>
			<li>• Thoughtful packaging for delivery</li>
		  </ul>
		  <a href="#menu" className="inline-block mt-6 btn-brand">Explore the menu</a>
		</div>
	  </div>
	</section>
  )
}
