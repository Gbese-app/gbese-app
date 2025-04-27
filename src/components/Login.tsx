import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-1/4 bg-blue-700 text-white p-6">
        <div className="flex items-center space-x-2">
          <img src="/icons/Gbeselogo.png" alt="Logo" className="h-8" />
          <h1 className="text-xl font-bold">Gbese</h1>
        </div>
      </aside>
  <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-Sora text-black-400 mb-4">Login to your account</h1>
          <p className="text-sm mb-4">
            Don'have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
          </p>

          <button className="w-full bg-white border border-gray-300 flex items-center justify-center py-2 mb-2 rounded">
            <img src="/icons/Google-icon.png" alt="Google" className="h-5 mr-2" />
            Continue with Google
          </button>
          <button className="w-full bg-white border border-gray-300 flex items-center justify-center py-2 mb-4 rounded">
            <img src="/icons/apple-icon.png" alt="Apple" className="h-5 mr-2" />
            Continue with Apple
          </button>

          <div className="text-center text-gray-500 mb-4">OR</div>

          <form className="space-y-4">
          
            <label htmlFor="email" className="block text-sm font-labels text-gray-400 mb-1">Email</label>
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
            <label htmlFor="password" className="block text-sm font-labels text-gray-400 mb-1">Password</label>
            <input type="password" placeholder="Password" className="w-full border p-2 rounded" />

            <p className="text-xs text-gray-500">
               <a href="#" className="text-blue-600">Forget Password?</a>
            </p>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
