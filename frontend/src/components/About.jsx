import React from 'react'

export default function About(){
  return (
	<section id="about" style={{padding:'2rem 0'}}>
	  <div style={{display:'flex',gap:16,alignItems:'center'}}>
		<div style={{flex:1}}>
		  <h2>About CRAVE</h2>
		  <p className="lead">CRAVE was founded to bring delicious, handcrafted meals to your doorstep. We focus on fresh ingredients and friendly service.</p>
		  <p style={{color:'var(--muted)'}}>Simple menu, honest food, and quick delivery. We hope you enjoy every bite.</p>
		</div>
		<div style={{width:280,height:180,background:'#fff2f2',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center'}}>Image</div>
	  </div>
	</section>
  )
}
