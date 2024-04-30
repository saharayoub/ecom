import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Register({ setAuthState }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignUpHandle = () => {
        // Implement your registration logic here
        // For example, you can send a request to your backend to create a new user
        console.log("Signing up...");
    }

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
                    <h1 className='text-5xl font-semibold'>Welcome Back</h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
                    <div className='mt-8'>
                        <div className='flex flex-col'>
                            <label className='text-lg font-medium'>Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                placeholder="Enter your email" />
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
                        <div className='mt-8 flex justify-between items-center'>
                            <div>
                                <input type="checkbox" id='remember' />
                                <label className='ml-2 font-medium text-base' htmlFor="remember">Remember for 30 days</label>
                            </div>
                        </div>
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button
                                onClick={onSignUpHandle}
                                className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-black rounded-xl text-white font-bold text-lg'>Sign in</button>
                        </div>
                        <div className='mt-8 flex justify-center items-center'>
                            <p className='font-medium text-base'>Already have an account?</p>
                            {/* Use Link to redirect to /signup */}
                            <Link to="/login" className='ml-2 font-medium text-base text-violet-500'>Login</Link>
                        </div>
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

