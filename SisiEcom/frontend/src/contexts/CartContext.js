import React, {createContext, useState, useEffect} from 'react';
import CartItem from '../components/CartItem';
 


//create context 
export const CartContext = createContext()

const CartProvider = ({children}) => {
  //cart state 
  const [cart, setCart] = useState([]);
  // item amount context 
  const [itemAmount, setItemAmount] = useState(0);
  // total price state 
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0);
    setTotal(total);
  });


  //update item amount 
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem)=>
      {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart])

  //add to cart 
  const addToCart = (Product, id) => {
    const newItem = {...Product, amount: 1}
    //check if the item is already in the cart 
    const CartItem = cart.find(item => {
      return item.id === id;
    });

    //if cart item is already in the cart
    if (CartItem) {
      const newCart = [...cart].map(item => {
        if (item.id == id) {
          return {...item, amount: CartItem.amount + 1}; 
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };


  //remove from cart 
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //clear cart 
  const clearCart = () => {
    setCart([]);
  };

  //increase amount 
  const increaseAmount = (id) => {
    const CartItem = cart.find(item => item.id === id);
    addToCart(CartItem, id);
  }

  //decrease amount 
  const decreaseAmount = (id) =>{
    const CartItem  = cart.find(item =>{
      return item.id === id;
    });
    if (CartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {...item, amount: CartItem.amount - 1};
        } else {
          return item;
        }
      });
      setCart(newCart); 
    }
      if (CartItem.amount < 2) {
        removeFromCart(id); 
      }
  };
  
  return (
  <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount,itemAmount, total}}>{children}</CartContext.Provider>
);
};

export default CartProvider;
