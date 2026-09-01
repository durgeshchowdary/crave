import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartDrawer(){
  const { items, increment, decrement, removeItem, subtotal } = useCart()

  return (
	<aside style={{position:'fixed',right:16,top:80,width:320,maxHeight:'70vh',overflow:'auto',background:'white',boxShadow:'var(--shadow)',borderRadius:12,padding:12}} aria-label="Cart">
	  <h3>Cart</h3>
	  {items.length===0 ? (
		<div style={{padding:'1rem',color:'var(--muted)'}}>Your cart is empty</div>
	  ) : (
		<div>
		  {items.map(i=> (
			<div key={i.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:'1px solid #f3f4f6'}}>
			  <div>
				<div style={{fontWeight:700}}>{i.name}</div>
				<div style={{color:'var(--muted)'}}>${(i.price * i.qty).toFixed(2)}</div>
			  </div>
			  <div style={{display:'flex',alignItems:'center',gap:6}}>
				<button className="cat-btn" onClick={()=>decrement(i.id)}>-</button>
				<div>{i.qty}</div>
				<button className="cat-btn" onClick={()=>increment(i.id)}>+</button>
				<button style={{marginLeft:8}} className="cat-btn" onClick={()=>removeItem(i.id)}>Remove</button>
			  </div>
			</div>
		  ))}

		  <div style={{display:'flex',justifyContent:'space-between',paddingTop:8,fontWeight:700}}>
			<div>Subtotal</div>
			<div>${subtotal.toFixed(2)}</div>
		  </div>

		  <div style={{marginTop:12}}>
			<button className="btn" style={{width:'100%'}}>Checkout</button>
		  </div>
		</div>
	  )}
	</aside>
  )
}
