import React from 'react';

const Cart = () => {
  return (
    <div className="fixed top-0 right-0 bg-white shadow-lg p-6 w-80 h-full">
      <h2 className="text-2xl font-bold mb-4">Seu Carrinho</h2>
      <p className="text-gray-600">O carrinho está vazio.</p>
      {/* Adicione lógica para listar produtos no carrinho */}
    </div>
  );
};

export default Cart;
