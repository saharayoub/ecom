import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const PromotionPage = () => {
  const { products } = useContext(ProductContext);

  // Filtrer les produits en promotion
  const promotionProducts = products.filter(product => product.isPromotion);

  return (
    <div className="container mx-auto mt-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Promotional Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {promotionProducts.length > 0 ? (
          promotionProducts.map(product => (
            <div key={product.id} className="relative">
              <Product product={product} />
              {/* Afficher le pourcentage de réduction */}
              {/* <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold">
                {product.discount}% OFF
              </div> */}
            </div>
          ))
        ) : (
          <p className="text-lg text-center">No promotional products found.</p>
        )}
      </div>
    </div>
  );
};

export default PromotionPage;
