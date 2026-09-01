import React, { useMemo, useState } from 'react'
import MenuCard from './MenuCard'
import menuData, { categories } from '../data/menu'
import { useCart } from '../context/CartContext'

export default function MenuSection() {
  const [active, setActive] = useState('All')
  const { addItem } = useCart()

  const items = useMemo(() => {
	if (active === 'All') return menuData
	return menuData.filter(m => m.category === active)
  }, [active])

  return (
	<section id="menu" className="py-8">
	  <div className="max-w-6xl mx-auto px-6 md:px-8">
		<h2 className="section-title">Menu</h2>
		<div className="mt-4">
			<div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 snap-x">
			{categories.map(cat => (
			  <button key={cat} onClick={() => setActive(cat)} className={`snap-start whitespace-nowrap px-5 py-2 rounded-full ${active === cat ? 'bg-[var(--accent)] text-white shadow-md' : 'bg-card border border-crave text-secondary'}`}>
				{cat}
			  </button>
			))}
		  </div>

		  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{items.map(item => (
			  <div key={item.id} className="transform hover:-translate-y-1 transition">
				<MenuCard item={item} onAdd={addItem} />
			  </div>
			))}
		  </div>
		</div>
	  </div>
	</section>
  )
}
