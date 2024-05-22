import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import CustomerReviews from './Reviews/CustomerReviews';

const Footer = () => {
  // State for review text
  const [reviewText, setReviewText] = useState('');

  // Function to submit review
  const handleSubmitReview = () => {
    // Review submission logic (implement as needed)
    console.log('Review submitted:', reviewText);
    // Reset text area after submission
    setReviewText('');
  };

  return (
    <footer className='bg-pink-200 py-12'>
      <div className='container mx-auto'>
        <div className="text-center md:text-left mt-6">
          <p className='text-xl font-semibold tracking-[2px] justify-end flex'>More about Luxe cosmetics : </p>
        </div>
        {/* Social media */}
        <div className="flex justify-end items-center mb-6">
          <ul className="flex items-center gap-2">
            <a
              href="https://github.com/saharayoub"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-7 h-7 bg-primeColor hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                <FaGithub />
              </li>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-7 h-7 bg-primeColor hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                <FaInstagram />
              </li>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009091535456"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-7 h-7 bg-primeColor hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                <FaFacebook />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/sahar-ayoub-732588237/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="w-7 h-7 bg-primeColor hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                <FaLinkedin />
              </li>
            </a>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:order-1">
            <CustomerReviews />
          </div>
          <div className="md:order-2">  
            <div>
              <h3 className="text-lg font-semibold mb-20"></h3>
              <a className='text-lg font-semibold'>Write a Review</a>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full p-2 border rounded"
                rows="4"
                placeholder="Write your review here..."
              ></textarea>
              <button
                onClick={handleSubmitReview}
                className="mt-2 bg-primeColor px-4 py-2 rounded hover:bg-pink-500 duration-300"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center md:text-right mt-6">
        <p className='mb-4 text-center'>Copyright &copy; | Luxe cosmetics 2024 | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
