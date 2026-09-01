import React from 'react'
import { useCart } from '../context/CartContext'

export default function FoodCard({ item }){
  const { addItem } = useCart()

  return (
	<article className="card" aria-labelledby={item.id}>
	  <div className="media" style={{backgroundImage:`url(${item.image})`,backgroundSize:'cover',backgroundPosition:'center'}}></div>
	  <div className="body">
		<h3 id={item.id}>{item.name}</h3>
		<p style={{margin:'0.4rem 0',color:'var(--muted)'}}>{item.description}</p>
		<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
		  <div className="price">${item.price.toFixed(2)}</div>
		  <button className="btn" onClick={()=>addItem(item)}>Add</button>
		</div>
	  </div>
	</article>
  )
}
