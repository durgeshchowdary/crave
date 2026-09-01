import React from 'react'

const data = [
  {id:1,name:'Aisha',text:'Amazing food and fast delivery!',rating:5},
  {id:2,name:'Carlos',text:'Fresh ingredients and great taste.',rating:4}
]

export default function Testimonials(){
  return (
	<section id="testimonials" style={{padding:'2rem 0'}}>
	  <h2>What customers say</h2>
	  <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:12}}>
		{data.map(t=> (
		  <div key={t.id} className="card" style={{padding:12}}>
			<div style={{fontWeight:700}}>{t.name} — {Array.from({length:t.rating}).map((_,i)=>'⭐')}</div>
			<p style={{color:'var(--muted)'}}>{t.text}</p>
		  </div>
		))}
	  </div>
	</section>
  )
}
