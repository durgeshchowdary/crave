import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, subtotal, clear, count } = useCart()
  const [open, setOpen] = useState(false)

  return (
	<>
	  <button onClick={() => setOpen(true)} className="fixed bottom-6 right-6 z-50 bg-[var(--brand)] text-white rounded-full px-4 py-3 shadow-lg flex items-center gap-3">
		<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
		  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
		</svg>
		<span className="font-medium">{count} items</span>
	  </button>

	  {open && (
		<div className="fixed inset-0 z-50 bg-black/70 flex justify-end" onClick={() => setOpen(false)}>
		  <aside className="w-full sm:w-96 bg-section h-full p-6 shadow-soft transform transition-transform duration-300 translate-x-0 border-l border-crave" onClick={e => e.stopPropagation()}>
			<div className="flex items-center justify-between">
			  <h3 className="text-lg font-semibold text-primary">Your cart</h3>
			  <div className="text-sm text-secondary">{count} items</div>
			</div>

			<div className="mt-4">
			  {items.length === 0 ? (
				<div className="text-center py-16">
				  <div className="text-xl font-semibold text-primary">Your cart is empty</div>
				  <div className="mt-3 text-secondary">Add dishes from the menu to begin your order.</div>
				</div>
			  ) : (
				<div className="flex flex-col gap-4">
				  {items.map(it => (
					<div key={it.id} className="flex items-center gap-4">
						<img src={it.image} alt={it.name} className="w-20 h-20 object-cover rounded-lg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'; }} />
					  <div className="flex-1">
						<div className="flex items-start justify-between gap-2">
						  <div>
							<div className="font-semibold text-primary">{it.name}</div>
							<div className="text-sm text-secondary">${it.price.toFixed(2)} each</div>
						  </div>
							<div className="text-sm text-primary">${(it.price * it.quantity).toFixed(2)}</div>
						</div>

						<div className="mt-3 flex items-center gap-2">
							<button onClick={() => updateQuantity(it.id, it.quantity - 1)} className="w-8 h-8 rounded-md bg-elev text-primary flex items-center justify-center">-</button>
						  <div className="w-10 text-center">{it.quantity}</div>
							<button onClick={() => updateQuantity(it.id, it.quantity + 1)} className="w-8 h-8 rounded-md bg-elev text-primary flex items-center justify-center">+</button>
						  <button onClick={() => removeItem(it.id)} className="ml-auto text-sm text-secondary">Remove</button>
						</div>
					  </div>
					</div>
				  ))}
				</div>
			  )}
			</div>

			<div className="mt-6 border-t pt-4 sticky bottom-0 bg-section">
			  <div className="flex items-center justify-between">
				<div>
					<div className="text-sm text-secondary">Subtotal</div>
				  <div className="text-xl font-bold text-primary">${subtotal.toFixed(2)}</div>
				</div>
				<div className="flex flex-col w-1/2">
				  <a href="#checkout" onClick={() => setOpen(false)} className="btn-brand text-center mb-2">Checkout</a>
				  <button onClick={() => { clear(); setOpen(false) }} className="btn-ghost">Clear cart</button>
				</div>
			  </div>
			</div>
		  </aside>
		</div>
	  )}
	</>
  )
}
