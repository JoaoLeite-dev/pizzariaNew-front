import React from 'react';

const FAQ = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Perguntas Frequentes</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Como faço meu pedido?</h3>
            <p className="text-gray-600">Você pode fazer seu pedido diretamente pelo nosso site.</p>
          </div>
          {/* Adicione mais perguntas e respostas conforme necessário */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
