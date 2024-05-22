import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function Login({ setAuthState, setUser }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/login", formData);
            setUser(formData.email);
            setAuthState('');
            navigate("/", { state: { id: formData.email } });
        } catch (error) {
            alert("Wrong details");
            console.error("Login error:", error);
        }
    }

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className='w-full max-w-xl px-8 py-6 rounded-lg bg-white shadow-md'>
                    <h1 className='text-4xl font-semibold mb-6'>Welcome Back</h1>
                    <p className='text-gray-500 mb-8'>Please enter your details.</p>
                    <form onSubmit={handleLogin}>
                        <div className='space-y-6'>
                            <div>
                                <label className='block text-gray-700'>Email</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className='w-full border rounded-md p-3'
                                    placeholder="Enter your email"
                                    type="email"
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700'>Password</label>
                                <input
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className='w-full border rounded-md p-3'
                                    placeholder="Enter your password"
                                    type="password"
                                />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <input type="checkbox" id='remember' />
                                    <label className='ml-2 font-medium text-base' htmlFor="remember">Remember for 30 days</label>
                                </div>
                                <button className='font-medium text-base text-violet-500'>Forgot password</button>
                            </div>
                            <button
                                type="submit"
                                className='w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition duration-300'
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className='mt-6 text-center'>
                        <p className='text-gray-700'>Don't have an account?</p>
                        <Link to="/signup" className='text-violet-500'>Sign up</Link>
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

export default Login;
