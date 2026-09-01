import React from 'react'

const data = [
  { id: 1, name: 'Aisha K.', rating: 5, text: 'Amazing flavors and quick delivery. Highly recommend!', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { id: 2, name: 'Daniel P.', rating: 4, text: 'Great menu variety and excellent quality.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 3, name: 'Priya S.', rating: 5, text: 'My go-to for comfort food. Always consistent.', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' }
]

export default function Testimonials() {
	return (
	<section id="testimonials" className="py-16 bg-section">
	  <div className="max-w-6xl mx-auto px-6 md:px-8">
		<h2 className="section-title">What customers say</h2>
		<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
		  {data.map(t => (
			<div key={t.id} className="bg-card p-6 rounded-2xl shadow-soft">
			  <div className="flex items-center gap-4">
				<img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
				<div>
				  <div className="font-semibold">{t.name}</div>
				  <div className="text-sm text-yellow-500">{'★'.repeat(t.rating)}</div>
				</div>
			  </div>
				<p className="mt-4 text-secondary">{t.text}</p>
			</div>
		  ))}
		</div>
	  </div>
	</section>
  )
}
