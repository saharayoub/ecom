import React, { createContext, useState, useEffect } from 'react';
import CartItem from '../components/CartItem';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calcul du prix total avec la mise à jour de la promotion
    const calculateTotal = () => {
      const total = cart.reduce((accumulator, currentItem) => {
        // Vérifier s'il y a une promotion sur l'article
        const discountedPrice = currentItem.discount
          ? currentItem.price - (currentItem.price * currentItem.discount) / 100
          : currentItem.price;
        return accumulator + discountedPrice * currentItem.amount;
      }, 0);
      setTotal(total);
    };

    calculateTotal();
  }, [cart]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  const addToCart = (Product, id) => {
    const newItem = { ...Product, amount: 1 };
    const CartItem = cart.find((item) => {
      return item.id === id;
    });

    if (CartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id == id) {
          return { ...item, amount: CartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const CartItem = cart.find((item) => item.id === id);
    addToCart(CartItem, id);
  };

  const decreaseAmount = (id) => {
    const CartItem = cart.find((item) => {
      return item.id === id;
    });
    if (CartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: CartItem.amount - 1 };
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
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
