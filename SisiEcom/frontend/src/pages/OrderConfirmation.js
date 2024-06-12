import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  const location = useLocation();
  const { deliveryInfo, message} = location.state || {};

 

  return (
    <div className="max-w-lg mx-auto my-20 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
      <p className="text-lg mb-4">{message}</p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Delivery Information :</h2>
        <p className="mb-2"><span className="font-semibold">Address :</span> {deliveryInfo?.address}</p>
        <p className="mb-2"><span className="font-semibold">City :</span> {deliveryInfo?.city}</p>
        <p className="mb-2"><span className="font-semibold">Postal Code :</span> {deliveryInfo?.postalCode}</p>
        <p className="mb-2"><span className="font-semibold">Phone :</span> {deliveryInfo?.phone}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Complaint :</h2>
        <textarea placeholder="Write your complaint here..." rows="5" className="w-full border p-2"></textarea>
      </div>
      <button className="bg-primary text-white py-2 px-4 rounded-md">Submit Complaint</button>
    </div>
  );
};

export default OrderConfirmation;
