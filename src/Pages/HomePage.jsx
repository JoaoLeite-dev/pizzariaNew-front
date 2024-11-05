import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';
import FAQ from '../components/FAQ';
import AboutUs from '../components/AboutUs';
import Cart from '../components/Cart';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <section className="hero text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo à sua Pizzaria</h1>
          <p className="text-gray-600">As melhores pizzas feitas com amor.</p>
        </section>
        <AboutUs />
        <Products />
        <FAQ />
      </main>
      <Footer />
      {/* <Cart /> */}
    </div>
  );
};

export default HomePage;
