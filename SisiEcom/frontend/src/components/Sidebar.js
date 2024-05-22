import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { initPayment } from '../components/services/PaymentService'; // Importez la fonction initPayment

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);
  const { itemAmount } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('online'); // State pour suivre le mode de paiement choisi

  const handleCheckout = async () => {
    if (paymentMethod === 'online') {
      const payment = { amount: total, status: 'pending', user: { firstName: 'John', lastName: 'Doe', email: 'john@example.com' } }; // Mock payment data
      const paymentInfo = await initPayment(payment); // Initialisez le paiement en ligne
      if (paymentInfo) {
        window.location.href = paymentInfo.payUrl; // Redirigez l'utilisateur vers l'URL de paiement
      } else {
        alert('Failed to initialize payment. Please try again.'); // Gérez les erreurs de paiement
      }
    } else {
      // Traitez la commande pour le paiement à la livraison
      alert('Your order will be processed for cash on delivery.');
      // Ici, vous pouvez appeler une fonction pour traiter la commande pour le paiement à la livraison
    }
  };

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping bag ({itemAmount})</div>
        <div onClick={(event) => { handleClose(); event.stopPropagation(); }} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b '>
        {cart.map(item => <CartItem item={item} key={item.id} />)}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4 '>
        <div className='flex w-full justify-between items-center '>
          <div className='uppercase font-semibold '>
            <span className='mr-2'>Total : </span> {parseFloat(total).toFixed(2)} dt
          </div>
          <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
            <FiTrash2 />
          </div>
        </div>
        {/* Ajoutez des boutons radio pour le choix du mode de paiement */}
        <div>
          <label className='flex items-center'>
            <input type="radio" value="online" checked={paymentMethod === 'online'} onChange={() => setPaymentMethod('online')} />
            Pay online
          </label>
          <label className='flex items-center'>
            <input type="radio" value="cash" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} />
            Cash on delivery
          </label>
        </div>
        <Link to='/' onClick={handleCheckout} className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'>Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
