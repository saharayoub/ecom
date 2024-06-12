import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { initPayment } from '../components/services/PaymentService';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);
  const { itemAmount } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: '',
    city: '',
    postalCode: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({
      ...deliveryInfo,
      [name]: value
    });
  };

  const handleCheckout = async () => {
    if (paymentMethod === 'online') {
      if (cart.length === 0) {
        alert('Your cart is empty. Please add some items before proceeding.');
        return;
      }

      const payment = { amount: total, status: 'pending', user: { firstName: 'John', lastName: 'Doe', email: 'john@example.com' } };
      const paymentInfo = await initPayment(payment);
      if (paymentInfo) {
        window.location.href = paymentInfo.payUrl;
      } else {
        alert('Failed to initialize payment. Please try again.');
      }
    } else {
      if (!deliveryInfo.address || !deliveryInfo.city || !deliveryInfo.postalCode || !deliveryInfo.phone) {
        alert('Please fill in all delivery details.');
        return;
      }
      // Navigate to the OrderConfirmation page with the delivery info
      navigate('/order-confirmation', {
        state: {
          deliveryInfo,
          message: 'Your order will be processed for cash on delivery payment.'
        }
      });
      clearCart();
    }
  };

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`} style={{ maxHeight: '100%', overflowY: 'auto' }}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping bag ({itemAmount})</div>
        <div onClick={(event) => { handleClose(); event.stopPropagation(); }} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map(item => <CartItem item={item} key={item.id} />)}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total : </span> {parseFloat(total).toFixed(2)} dt
          </div>
          <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
            <FiTrash2 />
          </div>
        </div>
        <div>
          <label className='flex items-center'>
            <input type="radio" value="online" checked={paymentMethod === 'online'} onChange={() => setPaymentMethod('online')} disabled={cart.length === 0} />
            Pay online
          </label>
          <label className='flex items-center'>
            <input type="radio" value="cash" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} disabled={cart.length === 0}/>
            Cash on delivery
          </label>
        </div>
        {paymentMethod === 'cash' && (
          <div className='mt-4'>
            <h3 className='font-semibold mb-2'>Delivery Information</h3>
            <input type="text" name="address" placeholder="Address" value={deliveryInfo.address} onChange={handleDeliveryChange} className='mb-2 p-2 border' />
            <input type="text" name="city" placeholder="City" value={deliveryInfo.city} onChange={handleDeliveryChange} className='mb-2 p-2 border' />
            <input type="text" name="postalCode" placeholder="Postal Code" value={deliveryInfo.postalCode} onChange={handleDeliveryChange} className='mb-2 p-2 border' />
            <input type="text" name="phone" placeholder="Phone" value={deliveryInfo.phone} onChange={handleDeliveryChange} className='mb-2 p-2 border' />
          </div>
        )}
        <button onClick={handleCheckout} className={`bg-primary flex p-4 justify-center items-center text-white w-full font-medium ${cart.length === 0 && paymentMethod === 'online' && 'opacity-50 cursor-not-allowed'}`}>Checkout</button>
      </div>
    </div>
  );
};

export default Sidebar;
