import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../redux/apiCalls.js";

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        setLoading(true);
        await register(dispatch, { email, password });
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
  };

  // ✅ لو الريجيستر نجح → روح للوحة التحكم
  if (user.currentUser) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='flex items-center bg-white shadow-lg overflow-hidden rounded-lg'>
        
        <div className='h-[500px] w-[500px] mr-5 transition-transform duration-700 ease-in-out transform hover:scale-105'>
          <img src="/WhatsApp Image 2025-11-01 at 20.08.39_f4d36964.jpg" alt="login" className='object-cover h-full w-full' />
        </div>

        <div className='p-[10px] w-[500px]'>
          <h2 className='text-2xl font-bold text-gray-600 mb-5'>Register</h2>

          {/* ✅ form الصحيح */}
          <form className='space-y-5' onSubmit={handleRegister}>

            <div>
              <label className='block text-gray-600 mb-1'>Email</label>
              <input
                type="email"
                className='py-2 w-full px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                placeholder='example@example.com'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className='block text-gray-600 mb-1'>Password</label>
              <input
                type="password"
                className='py-2 w-full px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                placeholder='*'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className='w-full py-2 bg-red-500 text-white font-bold rounded-md transition-transform duration-700 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transform hover:scale-105'
              type='submit'
            >
              {loading ? "Loading..." : "Register"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;