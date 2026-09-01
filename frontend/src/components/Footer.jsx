import React from 'react'

export default function Footer(){
  return (
	<footer style={{padding:'2rem 0',marginTop:'2rem',borderTop:'1px solid #f3f4f6'}}>
	  <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
		<div>
		  <div className="brand">CRAVE</div>
		  <div className="lead">Delicious food delivered fast</div>
		</div>
		<div>
		  <nav aria-label="Footer">
			<a style={{marginRight:12,color:'var(--muted)'}} href="#">Privacy</a>
			<a style={{color:'var(--muted)'}} href="#">Contact</a>
		  </nav>
		</div>
	  </div>
	</footer>
  )
}
