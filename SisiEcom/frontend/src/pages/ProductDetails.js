import React, { useContext } from 'react';
//import use params
import { useParams } from 'react-router-dom';
//import cart context
import { CartContext } from '../contexts/CartContext';
//import product context
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  

  //get the single product based on the id 
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
 
  // if product is not find 
  if (!product){
    return (
      <section className='h-screen flex justify-center items-center '>
        Loading...
      </section>
    )
  }
  
 

//destructure product 
const {title, price, description, image} = product;
return (
  <section className='pt-32 pb-12 lg-py-32 h-screen flex items-center'>
    <div className='container mx-auto'>
        {/* image & text wrapper */}
      <div className='flex flex-col items-center'>
        {/* image */}
        <div> 
          <img src={image} alt=''/>  
        </div>
       {/* text */}
        <div>text</div>
      </div>
    </div>
  </section>
)
};

export default ProductDetails;
