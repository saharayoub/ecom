// frontend/src/pages/LogoutPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const LogoutPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-pink-200">
            <div className="max-w-md p-8 bg-white shadow-lg rounded-md">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">You have been successfully logged out.</h1>
                <p className="text-gray-600 mb-8">Thank you for visiting. You are now logged out of your account.</p>
                <Link to="/" className="block text-center bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out">Return to Home</Link>
            </div>
        </div>
    );
};

export default LogoutPage;
