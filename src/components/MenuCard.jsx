import React from 'react'
import ImageWithFallback from './ImageWithFallback'

export default function MenuCard({ item, onAdd }) {
  return (
	<div className="card-ghost p-0 overflow-hidden flex flex-col h-full">
	  <div className="relative w-full h-48 bg-card rounded-t-xl overflow-hidden">
		<ImageWithFallback src={item.image} alt={item.name} className="w-full h-full object-cover" />
		{item.badge && (
		  <div className="absolute top-3 left-3 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">{item.badge}</div>
		)}
		<div className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(29,29,34,0.9)', color: 'white' }}>${item.price.toFixed(2)}</div>
	  </div>

	  <div className="p-4 flex-1 flex flex-col">
		<h3 className="menu-card-title font-semibold text-primary">{item.name}</h3>
		<p className="text-sm text-muted mt-2 flex-1">{item.description}</p>

		<div className="mt-4 flex items-center justify-between">
			<div className="inline-flex items-center gap-2 text-sm text-secondary">
			<span style={{ color: '#FBBF24' }}>★</span>
			<span>{item.rating}</span>
		  </div>
		  <button onClick={() => onAdd(item)} className="btn-brand text-sm" style={{ minHeight: 44 }}>Add to cart</button>
		</div>
	  </div>
	</div>
  )
}
