import React, { useContext} from 'react';
//import link 
import { Link } from 'react-router-dom';
//import icons 
import { BsPlus, BsEyeFill } from 'react-icons/bs';
//import cart context 
import {CartContext} from '../contexts/CartContext';


const Product = ({product}) => {
  const { addToCart } = useContext(CartContext);
  
  //destructure product 
  const { id, image, category, title, price } = product;

  return (
  <div>
    <Link to={`/product/${id}`} className='text-sm uppercase font-semibold max-w-[240px] text-primary 
          hover:underline ml-10'>For more informations</Link>
    <div className=' h-[300px] mb-4 
    relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center
      items-center'>
        {/* image*/}
        <div className='w-[200px] mx-auto flex 
        justify-center items-center '>
          <img className='max-h-[300px] group-hover:scale-150 transition duration-500 w-full' src={image} alt=''/>

        </div>
      </div>
      {/* button */}
      <div className='absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center 
      gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
        <button onClick={() => addToCart(product, id)}>
          <div className='flex justify-center items-center
          text-white w-12 h-12 bg-red-500'>
          <BsPlus className='text-3xl'/>
          </div>
        </button>
        <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex
        justify-center items-center text-primary drop-shadow-xl"><BsEyeFill/></Link>
      </div>
    </div>

    {/* category & title & price */}
    <div>
      <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
      {/* <Link to = {'/product/&{id}'}> */}
      <div className='font-semibold max-w-[240px] text-primary'>{title}</div>
      {/* </Link> */}
      <div className='font-semibold'>{price} dt</div>
      
    </div>
  </div>
  );
};

export default Product;
