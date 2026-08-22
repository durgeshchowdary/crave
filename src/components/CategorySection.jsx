import React from 'react'

export default function CategorySection({ categories, active, onChange }) {
  return (
	<section className="py-6">
	  <div className="max-w-6xl mx-auto px-6 md:px-8">
		<div className="flex gap-3 overflow-x-auto no-scrollbar snap-x py-2">
		  {categories.map(cat => (
			<button
			  key={cat}
			  onClick={() => onChange(cat)}
			  className={`snap-start whitespace-nowrap px-5 py-2 rounded-full border ${active === cat ? 'bg-[var(--accent)] text-white shadow-md' : 'bg-card text-secondary border-crave'} transition`}
			>
			  {cat}
			</button>
		  ))}
		</div>
	  </div>
	</section>
  )
}
