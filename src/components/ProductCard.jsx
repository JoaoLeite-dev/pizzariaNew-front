import { Button } from '@mui/material';
import React from 'react';

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center">
      <img src={image} alt={name} className="h-32 w-32 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-yellow-500 font-bold">${price}</p>
      <Button variant="contained" sx={{backgroundColor: "#d3c014"}}>Adicionar ao Carrinho</Button>
    </div>
  );
};

export default ProductCard;
