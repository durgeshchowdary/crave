import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { items, subtotal, clear } = useCart()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', notes: '' })

  function handleChange(e) {
	setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
	e.preventDefault()
	if (!form.name || !form.phone || !form.address) {
	  alert('Please fill required fields: name, phone, address')
	  return
	}
	setLoading(true)
	// simulate order submission
	await new Promise(r => setTimeout(r, 1000))
	const order = { id: Date.now(), items, subtotal, customer: form, createdAt: new Date().toISOString() }
	setSuccess(order)
	clear()
	setLoading(false)
  }

	if (success) {
	return (
	  <section id="checkout" className="py-12">
	  <div className="max-w-3xl mx-auto px-6">
		  <div className="bg-card p-8 rounded-2xl shadow-soft text-center">
			<h3 className="text-2xl font-display font-semibold">Order confirmed</h3>
			<p className="mt-3 text-secondary">Thank you <span className="font-medium">{success.customer.name}</span> — your order <span className="font-semibold">#{success.id}</span> is on its way.</p>
			<div className="mt-6">
			  <a href="#home" className="btn-ghost">Back to home</a>
			</div>
		  </div>
		</div>
	  </section>
	)
  }

	return (
	<section id="checkout" className="py-12">
	  <div className="max-w-6xl mx-auto px-6">
		<h2 className="section-title">Checkout</h2>
		<div className="mt-6 bg-card p-6 rounded-2xl shadow-soft grid grid-cols-1 lg:grid-cols-3 gap-6">
		  <form onSubmit={handleSubmit} className="lg:col-span-2">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			  <div>
				<label className="text-sm font-medium">Full name *</label>
				<input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full input-field px-3 py-3 focus-ring" />
			  </div>
			  <div>
				<label className="text-sm font-medium">Phone *</label>
				<input name="phone" value={form.phone} onChange={handleChange} className="mt-1 block w-full input-field px-3 py-3 focus-ring" />
			  </div>

			  <div>
				<label className="text-sm font-medium">Email</label>
				<input name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full input-field px-3 py-3 focus-ring" />
			  </div>
			  <div>
				<label className="text-sm font-medium">Delivery address *</label>
				<input name="address" value={form.address} onChange={handleChange} className="mt-1 block w-full input-field px-3 py-3 focus-ring" />
			  </div>

			  <div className="md:col-span-2">
				<label className="text-sm font-medium">Instructions</label>
				<textarea name="notes" value={form.notes} onChange={handleChange} className="mt-1 block w-full input-field px-3 py-3 focus-ring min-h-[96px]" />
			  </div>
			</div>

			<div className="mt-6 flex items-center justify-between pt-4 border-t">
			  <div>
				<div className="text-sm text-secondary">Items: {items.length}</div>
				<div className="text-lg font-semibold">Total: ${subtotal.toFixed(2)}</div>
			  </div>
			  <div>
				<button type="submit" disabled={loading} className="btn-brand" style={{ minHeight: 44 }}>
				  {loading ? 'Placing order...' : 'Place Order'}
				</button>
			  </div>
			</div>
		  </form>

			<aside className="bg-section p-4 rounded-lg">
			<h4 className="font-semibold">Order Summary</h4>
			<div className="mt-3 space-y-3">
			  {items.length === 0 ? (
				<div className="text-sm text-secondary">Your cart is empty. Add items to see the order summary.</div>
			  ) : (
				items.map(it => (
					<div key={it.id} className="flex items-center justify-between">
					<div className="text-sm text-secondary">{it.name} × {it.quantity}</div>
					<div className="text-sm font-medium">${(it.price * it.quantity).toFixed(2)}</div>
				  </div>
				))
			  )}
			</div>
			<div className="mt-4 border-t pt-3 flex items-center justify-between">
			  <div className="text-sm text-secondary">Subtotal</div>
			  <div className="font-semibold">${subtotal.toFixed(2)}</div>
			</div>
			<div className="mt-2 flex items-center justify-between">
			  <div className="text-sm text-secondary">Total</div>
			  <div className="text-xl font-bold">${subtotal.toFixed(2)}</div>
			</div>
		  </aside>
		</div>
	  </div>
	</section>
  )
}
