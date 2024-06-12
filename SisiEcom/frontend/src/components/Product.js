import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price, discount } = product;
  const discountedPrice = price - (price * (discount || 0)) / 100;
  const [showMessage, setShowMessage] = useState(false); // État pour contrôler l'affichage du message

  const handleAddToCart = () => {
    // Ajoutez l'article au panier
    addToCart(product, id);
    // Affichez le message
    setShowMessage(true);
    // Masquez le message après 2 secondes
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div className="mb-8">
      <div className="relative overflow-hidden group transition">
        <div className="flex justify-center items-center">
          <div className="mx-auto">
            <img
              className="max-h-[300px] group-hover:scale-150 transition duration-500 w-full"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={handleAddToCart}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <div className="font-semibold max-w-[240px] text-primary">{title}</div>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2">
            {discount ? (
              <div>
                <div className="font-semibold text-red-500">{discountedPrice} dt</div>
                <div className="text-sm line-through text-gray-500">{price} dt</div>
              </div>
            ) : (
              <div className="font-semibold">{price} dt</div>
            )}
          </div>
          {discount && (
            <div className="bg-red-500 text-white px-2 py-1 text-xs font-bold">
              {discount}% OFF
            </div>
          )}
        </div>
      </div>
      {showMessage && ( // Afficher le message si showMessage est true
        <div className="text-green-500 mt-2">The item has been added to the cart</div>
      )}
    </div>
  );
};

export default Product;
