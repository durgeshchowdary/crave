import React, { useMemo, useState } from 'react'
import menuData from '../data/menu'
import FoodCard from './FoodCard'
import Categories from './Categories'

export default function Menu(){
  const [active, setActive] = useState('All')

  const categories = useMemo(()=> ['All', ...Array.from(new Set(menuData.map(m=>m.category)))] ,[])

  const items = useMemo(()=>{
	if(active==='All') return menuData
	return menuData.filter(m=>m.category===active)
  },[active])

  return (
	<section>
	  <h2>Menu</h2>
	  <p className="lead">Popular dishes handpicked for you</p>
	  <Categories categories={categories} active={active} onChange={setActive} />

	  <div className="menu-grid">
		{items.map(i=> <FoodCard key={i.id} item={i} />)}
	  </div>
	</section>
  )
}
