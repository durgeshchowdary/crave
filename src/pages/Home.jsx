import React from 'react'
import Hero from '../components/Hero'
import MenuSection from '../components/MenuSection'
import About from '../components/About'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
	<main>
	  <Hero />
	  <MenuSection />
	  <About />
	  <Testimonials />
	</main>
  )
}
