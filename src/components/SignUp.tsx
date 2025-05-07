import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex">
      
      <aside className="sticky fixed top-0 left-0 h-[100vh] w-1/4 bg-[#021346] text-white p-6 flex flex-col items-center relative">
       
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <img src="/LogoDarkBG.png" alt="gbese" className="h-12 w-25" />
        </div>

        <div className="h-auto" />

        <div className="relative w-full max-w-xs flex flex-col items-center mt-40">
          <img
            src="/images/Combo Chart 1.png"
            alt="Activity Breakdown"
            className="rounded-lg shadow-lg z-10 w-[180px] h-[170px]"
          />
          <img
            src="/images/my-debts-card.png"
            alt="My Debts"
            className="absolute top-[25%] right-[-10%] z-20 w-25 h-7"
          />
          <img
            src="/images/transaction-history.png"
            alt="Transaction History"
            className="absolute top-[50%] left-[-4%] z-40 w-20"
          />
        </div>

        
        <div className="mt-30 text-center">
          <h2 className="text-lg font-bold leading-tight">Shift Your Debt, Breathe Again.</h2>
          <p className="text-xs mt-4 text-gray-200">Join where credit no be wahala</p>
        </div>
      </aside>

      
      <main className="flex-1 flex  justify-center bg-[#F9FAFB] min-h-screen">
        <div className="w-full max-w-xl my-10">
          <h1 className="text-[40px] font-bold text-[#0B0B0B] text-center ">Create an account</h1>
          <p className="text-center text-sm mb-10 text-[#4B5563]">
            Have an account?{" "}
            <Link to="/login" className="text-[#021346] font-semibold">
              Login
            </Link>
          </p>

          <button className="w-full border border-gray-300 rounded-lg py-3 mb-2 flex justify-center items-center font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 48 48"  className=" mr-2"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"/><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"/><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"/><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" />
            </svg> 
            Continue with Google
          </button>
          <button className="w-full border border-gray-300 rounded-lg py-3 mb-4 flex justify-center items-center font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="27.3" height="27.3" viewBox="0 0 128 128"   className="mr-2" ><path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137c-.138.44-2.607 8.916-8.597 17.669c-5.178 7.568-10.553 15.108-19.018 15.266c-8.318.152-10.993-4.934-20.504-4.934c-9.508 0-12.479 4.776-20.354 5.086c-8.172.31-14.395-8.185-19.616-15.724C15.822 94.961 7.669 66.8 18.616 47.791c5.438-9.44 15.158-15.417 25.707-15.571c8.024-.153 15.598 5.398 20.503 5.398c4.902 0 14.106-6.676 23.782-5.696c4.051.169 15.421 1.636 22.722 12.324c-.587.365-13.566 7.921-13.425 23.639M82.272 21.719c4.338-5.251 7.258-12.563 6.462-19.836c-6.254.251-13.816 4.167-18.301 9.416c-4.02 4.647-7.54 12.087-6.591 19.216c6.971.54 14.091-3.542 18.43-8.796" />
            </svg>
            Continue with Apple
          </button>
          <div className="text-center mb-4 font-boldn">OR</div>

          <form className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-[#6D6D6D] mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#6D6D6D] mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#6D6D6D] mb-1">Password</label>
              <input
                type="password"
                placeholder="Create password"
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
            </div>

            <button type="submit" className="w-full bg-[#05238C] text-white py-3 rounded-lg font-semibold mt-8" >
              Create Account
            </button>
          </form>

          <p className="text-xs text-center text-gray-400 mt-4">
            By signing up, you agree to our{" "}
            <a href="#" className="text-black font-semibold">
              Terms & Conditions
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default SignUp
