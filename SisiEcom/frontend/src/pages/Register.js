import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'; // Correct import of useNavigate

export default function Register({ setAuthState }) {
    const navigate = useNavigate(); // Correctly named variable for useNavigate
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNb, setPhoneNb] = useState('');
    
    async function onSignUpHandle(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/users/register", {
                firstName, 
                lastName, 
                email, 
                password, 
                address, 
                phoneNb
            });
            // Process response
            console.log("Signup successful:", response.data);
            navigate("/", { state: { id: email } }); // Adjust navigation as needed
        } catch (error) {
            // More detailed error handling
            alert("Error: " + (error.response?.data?.message || "An error occurred"));
            console.error("Signup error:", error);
        }
    }
    

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className='w-full max-w-3xl px-8 py-6 rounded-lg bg-white shadow-md'>
                    <h1 className='text-3xl font-semibold mb-4'>Welcome!</h1>
                    <p className='text-gray-500 mb-6'>Please enter your details to sign up.</p>
                    <form onSubmit={onSignUpHandle}>
                        <div className='space-y-6'>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label className='block text-gray-700'>First Name</label>
                                    <input
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className='w-full border rounded-md p-3'
                                        placeholder="Enter your first name"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label className='block text-gray-700'>Last Name</label>
                                    <input
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className='w-full border rounded-md p-3'
                                        placeholder="Enter last name"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className='block text-gray-700'>Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-full border rounded-md p-3'
                                    placeholder="Enter your email"
                                    type="email"
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Address</label>
                                <input
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className='w-full border rounded-md p-3'
                                    placeholder="Enter your address"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Phone Number</label>
                                <input
                                    value={phoneNb}
                                    onChange={(e) => setPhoneNb(e.target.value)}
                                    className='w-full border rounded-md p-3'
                                    placeholder="Enter Phone Number"
                                    type="tel"
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='w-full border rounded-md p-3'
                                    placeholder="Enter your password"
                                    type="password"
                                />
                            </div>
                            <button
                                type="submit" // Ensure button submits form
                                className='w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition duration-300'
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className='mt-4 text-center'>
                        <p className='text-gray-700'>Already have an account?</p>
                        <Link to="/login" className='text-violet-500'>Login</Link>
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
