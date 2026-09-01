import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }){
  const [items, setItems] = useState(() => {
	try{
	  const raw = localStorage.getItem('crave_cart')
	  return raw ? JSON.parse(raw) : []
	}catch(e){ return [] }
  })

  useEffect(()=>{
	try{ localStorage.setItem('crave_cart', JSON.stringify(items)) }catch(e){}
  },[items])

  function addItem(product){
	setItems(prev => {
	  const found = prev.find(p=>p.id===product.id)
	  if(found){
		return prev.map(p=>p.id===product.id?{...p, qty:p.qty+1}:p)
	  }
	  return [...prev,{...product, qty:1}]
	})
  }

  function removeItem(id){
	setItems(prev=>prev.filter(p=>p.id!==id))
  }

  function increment(id){
	setItems(prev=>prev.map(p=>p.id===id?{...p, qty:p.qty+1}:p))
  }

  function decrement(id){
	setItems(prev=>{
	  const found = prev.find(p=>p.id===id)
	  if(!found) return prev
	  if(found.qty<=1) return prev.filter(p=>p.id!==id)
	  return prev.map(p=>p.id===id?{...p, qty:p.qty-1}:p)
	})
  }

  const subtotal = items.reduce((s,i)=>s + i.price * i.qty, 0)

  return (
	<CartContext.Provider value={{items, addItem, removeItem, increment, decrement, subtotal}}>
	  {children}
	</CartContext.Provider>
  )
}

export function useCart(){
  const ctx = useContext(CartContext)
  if(!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
