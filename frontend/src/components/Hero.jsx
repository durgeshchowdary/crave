import React from 'react'

export default function Hero(){
  return (
	<section className="hero">
	  <div className="content">
		<h1>Crave the best flavours in town</h1>
		<p>Explore our menu, add items to your cart and checkout in a few clicks.</p>
		<div style={{display:'flex',gap:'0.5rem'}}>
		  <a className="btn" href="#menu">View Menu</a>
		  <a className="btn secondary" href="#about">Learn More</a>
		</div>
	  </div>
	  <div className="media-placeholder" style={{width:360,height:220,background:'#fff2f2',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'var(--shadow)'}}>
		<div style={{color:'var(--accent)'}}>Food Image</div>
	  </div>
	</section>
  )
}
