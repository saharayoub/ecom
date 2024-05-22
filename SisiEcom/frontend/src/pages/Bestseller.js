import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const BestsellerPage = () => {
  const { products } = useContext(ProductContext);
  const bestsellerProducts = products.filter(product => product.price < 60);

  return (
    <div className="container mx-auto mt-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Bestseller Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {bestsellerProducts.length > 0 ? (
          bestsellerProducts.map(product => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p className="text-lg text-center">No bestseller products found.</p>
        )}
      </div>
    </div>
  );
};

export default BestsellerPage;
