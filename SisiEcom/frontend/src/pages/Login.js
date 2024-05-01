import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'; // Correctly import useNavigate

function Login({ setAuthState, setUser }) {
    const navigate = useNavigate(); // Corrected variable name for useNavigate
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e) { // Renamed from submit to handleLogin
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/register", { email, password });
            if (response.data === "exist") {
                alert("User Already exists");
            } else if (response.data === "notexist") {
                // Correct placement to set user and change auth state
                setUser(email);
                setAuthState('');
                navigate("/", { state: { id: email } }); // Corrected navigation
            }
        } catch (error) {
            alert("Wrong details");
            console.log(error);
        }
    }

    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
                    <h1 className='text-5xl font-semibold'>Welcome Back</h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your details.</p>
                    <form onSubmit={handleLogin}> {/* Added form element for proper submit handling */}
                        <div className='mt-8'>
                            <div className='flex flex-col'>
                                <label className='text-lg font-medium'>Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                                    placeholder="Enter your email"
                                    type="email" // Added type email for proper validation
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
                            <div className='mt-8 flex justify-between items-center'>
                                <div>
                                    <input type="checkbox" id='remember' />
                                    <label className='ml-2 font-medium text-base' htmlFor="remember">Remember for 30 days</label>
                                </div>
                                <button className='font-medium text-base text-violet-500'>Forgot password</button>
                            </div>
                            <div className='mt-8 flex flex-col gap-y-4'>
                                <button
                                    type="submit" // Ensure button submits form
                                    className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-black rounded-xl text-white font-bold text-lg'>Sign in</button>
                            </div>
                        </div>
                    </form>
                    <div className='mt-8 flex justify-center items-center'>
                        <p className='font-medium text-base'>Don't have an account?</p>
                        <Link to="/signup" className='ml-2 font-medium text-base text-violet-500'>Sign up</Link>
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
