import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import FAQ from '../components/FAQ'
import AboutUs from '../components/AboutUs'
// import Cart from '../components/Cart'
import HeroCarousel from '../components/HeroCarousel '

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <section className="hero">
        <HeroCarousel/>
        </section>
        <AboutUs />
        <Products />
        <FAQ />
      </main>
      <Footer />
      {/* <Cart /> */}
    </div>
  )
}

export default HomePage
