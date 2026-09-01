import React from 'react'

export default function Categories({ categories = ['All','Pizza','Burgers','Sides','Drinks'], active='All', onChange=()=>{} }){
  return (
	<div className="categories" role="tablist" aria-label="Categories">
	  {categories.map(cat=> (
		<button key={cat} className={"cat-btn" + (cat===active? ' active':'')} onClick={()=>onChange(cat)}>{cat}</button>
	  ))}
	</div>
  )
}
