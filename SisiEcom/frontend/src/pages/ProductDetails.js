import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';


const ProductDetails = () => {
  const { id } = useParams(); // Obtenez l'id à partir de l'URL
  const { products } = useContext(ProductContext);

  const product = products.find(item => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    )
  }

  const { title, price, description, image } = product;

  return (
    <section class="pt-32 pb-12 lg:py-32 h-screen flex items-center">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div class="flex justify-center lg:justify-end">
        <img class="w-96 lg:max-h-98" src={image} alt="" />
      </div>
      <div>
        <div class="font-semibold text-xl lg:text-2xl mb-4">{title}</div>
        <div class="text-base lg:text-lg mb-4">
          <span class="font-semibold text-gray-600">Price:</span>
          <span class="ml-2 text-xl font-bold text-primary">
            <span class="text-gray-400 mr-2">{price} dt</span>
          </span>
        </div>
        <div class="text-base lg:text-lg mb-4">{description}</div>
        {/* <button
          class="bg-primary text-white px-4 py-2 rounded"
          onClick={() => addToCart(product, id)}>
          Add to Cart
        </button> */}
       
      </div>
    </div>
  </div>
</section>

  );
};

export default ProductDetails;