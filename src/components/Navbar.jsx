import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Sua Pizzaria</h1>
        <ul className="flex space-x-4">
          <li className="text-white">Home</li>
          <li className="text-white">Sobre Nós</li>
          <li className="text-white">Produtos</li>
          <li className="text-white">FAQ</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
