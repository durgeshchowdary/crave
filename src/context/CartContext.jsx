import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
	try {
	  const raw = localStorage.getItem('crave_cart')
	  return raw ? JSON.parse(raw) : []
	} catch (e) {
	  return []
	}
  })

  useEffect(() => {
	localStorage.setItem('crave_cart', JSON.stringify(items))
  }, [items])

  function addItem(menuItem) {
	setItems(prev => {
	  const idx = prev.findIndex(i => i.id === menuItem.id)
	  if (idx > -1) {
		const copy = [...prev]
		copy[idx].quantity += 1
		return copy
	  }
	  return [...prev, { ...menuItem, quantity: 1 }]
	})
  }

  function removeItem(id) {
	setItems(prev => prev.filter(i => i.id !== id))
  }

  function updateQuantity(id, qty) {
	setItems(prev => prev.map(i => (i.id === id ? { ...i, quantity: Math.max(1, qty) } : i)))
  }

  function clear() {
	setItems([])
  }

  const subtotal = items.reduce((s, it) => s + it.price * it.quantity, 0)

  const value = {
	items,
	addItem,
	removeItem,
	updateQuantity,
	clear,
	subtotal,
	count: items.reduce((c, it) => c + it.quantity, 0)
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartContext
