import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register({ setAuthState }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        phoneNb: '',
    });

    const onSignUpHandle = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/register', formData);
            console.log('Signup successful:', response.data);
            navigate('/login'); // Redirect to login page after successful registration
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className="w-full max-w-3xl px-8 py-6 rounded-lg bg-white shadow-md">
                    <h1 className="text-3xl font-semibold mb-4">Welcome!</h1>
                    <p className="text-gray-500 mb-6">Please enter your details to sign up.</p>
                    <form onSubmit={onSignUpHandle}>
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700">First Name</label>
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full border rounded-md p-3"
                                        placeholder="Enter your first name"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700">Last Name</label>
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full border rounded-md p-3"
                                        placeholder="Enter last name"
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-md p-3"
                                    placeholder="Enter your email"
                                    type="email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Address</label>
                                <input
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-md p-3"
                                    placeholder="Enter your address"
                                    type="text"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone Number</label>
                                <input
                                    name="phoneNb"
                                    value={formData.phoneNb}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-md p-3"
                                    placeholder="Enter Phone Number"
                                    type="tel"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Password</label>
                                <input
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full border rounded-md p-3"
                                    placeholder="Enter your password"
                                    type="password"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition duration-300"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-gray-700">Already have an account?</p>
                        <Link to="/login" className="text-violet-500">Login</Link>
                    </div>
                </div>
            </div>
            <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
                <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-white to-violet-500 animate-spin" />
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
            </div>
        </div>
    );
}

export default Register;
