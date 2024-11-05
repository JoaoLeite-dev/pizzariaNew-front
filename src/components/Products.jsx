import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const products = [
    { name: 'Pizza Margherita', description: 'Molho de tomate, queijo e azeitonas', price: 29.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwxyZSsOyztN8J0qbQJdfMNc71mCDYjdAdQ&s' },
    { name: 'Pizza Calabresa', description: 'Queijo, calabresa e molho especial', price: 39.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQraqdUEzg1b9U_vjdOWbgOX3yo4nVK8DFA&s' },
    { name: 'Pizza Mussarela', description: 'Mussarela e molho especial', price: 39.99, image: 'https://png.pngtree.com/png-clipart/20231003/original/pngtree-pizza-pizza-png-pizza-ai-generated-png-image_13245850.png' },
    // Adicione mais produtos conforme necessário
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
