import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const SkincarePage = () => {
  const { products } = useContext(ProductContext);
  const skincareProducts = products.filter(product => product.category === "Skincare Product");

  return (
    <div className="container mx-auto mt-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Skincare Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {skincareProducts.length > 0 ? (
          skincareProducts.map(product => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p className="text-lg text-center">No skincare products found.</p>
        )}
      </div>
    </div>
  );
};

export default SkincarePage;
