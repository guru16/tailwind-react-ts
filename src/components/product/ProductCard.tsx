import React from 'react';
import type { Product } from '../../types/Product';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-500">{product.category}</p>
      <p className="text-black font-bold mt-2">${product.price.toFixed(2)}</p>
    </div>
  );
};
