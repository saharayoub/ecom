import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'; // Correct import of useNavigate

export default function Register({ setAuthState }) {
    const navigate = useNavigate(); // Correctly named variable for useNavigate
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setaddress] = useState('');
    const [phoneNb, setphoneNb] = useState('');
    
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
                <div className='w-11/12 max-w-[650px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
                    <h1 className='text-5xl font-semibold'>Welcome!</h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your details to sign up.</p>
                    <form onSubmit={onSignUpHandle}>
                        <div className='mt-8'>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col'>
                                    <label className='text-lg font-medium'>First Name</label>
                                    <input
                                        value={firstName}
                                        onChange={(e) => setfirstName(e.target.value)}
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        placeholder="Enter your first name"
                                        type="text"
                                    />
                                </div>
                                <div className='flex flex-col '>
                                    <label className='text-lg font-medium'>Last Name</label>
                                    <input
                                        value={lastName}
                                        onChange={(e) => setlastName(e.target.value)}
                                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                        placeholder="Enter last name"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col mt-4'>
                                <label className='text-lg font-medium'>Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                    placeholder="Enter your email"
                                    type="email"
                                />
                            </div>

                            <div className='flex flex-col mt-4'>
                                <label className='text-lg font-medium'>Adress</label>
                                <input
                                    value={address}
                                    onChange={(e) => setaddress(e.target.value)}
                                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                    placeholder="Enter your address"
                                    type="text"
                                />
                            </div>
                            <div className='flex flex-col mt-4'>
                                <label className='text-lg font-medium'>Phone Number</label>
                                <input
                                    value={phoneNb}
                                    onChange={(e) => setphoneNb(e.target.value)}
                                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                    placeholder="Enter Phone Number"
                                    type="tel"
                                />
                            </div>
                            <div className='flex flex-col mt-4'>
                                <label className='text-lg font-medium'>Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                    placeholder="Enter your password"
                                    type="password"
                                />
                            </div>
                            <div className='mt-8'>
                                <button
                                    type="submit" // Ensure button submits form
                                    className='w-full active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-black rounded-xl text-white font-bold text-lg'>
                                    Sign Up
                                </button>
                            </div>
                            <div className='mt-8 flex justify-center items-center'>
                                <p className='font-medium text-base'>Already have an account?</p>
                                <Link to="/login" className='ml-2 font-medium text-base text-violet-500'>Login</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
                <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-white to-violet-500 animate-spin" />
                <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
            </div>
        </div>
    );
}
