import React from 'react'

const SignUp: React.FC = () => {
  return (
    <div className="flex min-h-screen font-sans">
      <div className="bg-[#0038FF] w-1/3 flex items-start px-8 pt-8">
        <div className="flex items-center space-x-2">
          <img src="/icons/Gbeselogo.png" alt="Gbeselogo" className="h-10" />
          <h1 className="text-white text-2xl font-bold">Gbese</h1>
        </div>
      </div>

      <div className="w-2/3 flex items-center justify-center bg-white px-8 py-12">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-2">Create your account</h2>
          <p className="text-sm text-gray-600 mb-4">
            Have an account?{' '}
            <a href="#" className="text-blue-600 underline">
              Login
            </a>
          </p>

          <button className="flex items-center justify-center w-full border border-gray-300 py-2 px-4 mb-2 rounded-md gap-2">
            <img src="/icons/Google-icon.png" alt="Google" className="h-5" />
            Continue with Google
          </button>
          <button className="flex items-center justify-center w-full border border-gray-300 py-2 px-4 mb-4 rounded-md gap-2">
            <img src="/icons/apple-icon.png" alt="Apple" className="h-5" />
            Continue with Apple
          </button>

          <div className="text-center text-gray-500 mb-4">OR</div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />

            <p className="text-xs text-gray-500">
              By signing up, you agree to our{' '}
              <a href="#" className="text-blue-600 underline">
                Terms & Conditions
              </a>
            </p>

            <button
              type="submit"
              className="w-full bg-[#0038FF] text-white font-semibold py-2 rounded-md mt-2"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
