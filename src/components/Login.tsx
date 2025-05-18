import { Link } from 'react-router-dom'
import { useLoginMutation } from '../services/mutation'
import { ChangeEvent, useState } from 'react'
import { FormData } from '../types/general'
import { Loader2Icon } from 'lucide-react'

const Login = () => {
  const { mutate, isPending } = useLoginMutation()

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })
  console.log(formData)

  // Handle form change
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleUserLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(formData)
  }

  const baseURL = import.meta.env.BASE_URL

  console.log(baseURL)
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

      <main className="flex-1 flex items-center justify-center bg-[#F9FAFB] min-h-screen">
        <div className="w-full max-w-xl p-8">
          <h1 className="text-[40px] font-bold text-[#0B0B0B] text-center ">Welcome back!</h1>
          <p className="text-center text-sm mb-8 text-[#4B5563]">
            Don't have an account?{' '}
            <Link to="/" className="text-[#021346] font-semibold">
              Create Account
            </Link>
          </p>

          <Link to={"https://gbese-backend.onrender.com/api/v1/auth/google?callbackUrl=" + { baseURL } + "/dashboard"}>
            <button className="w-full border border-gray-300 rounded-lg py-3 mb-4 flex justify-center items-center font-medium cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 48 48"
                className=" mr-2"
              >
                <path
                  fill="#ffc107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                />
                <path
                  fill="#ff3d00"
                  d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                />
                <path
                  fill="#4caf50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                />
                <path
                  fill="#1976d2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                />
              </svg>
              Continue with Google
            </button>
          </Link>
          <div className="text-center mb-7 font-bold">OR</div>

          <form className="space-y-2" onSubmit={handleUserLogin}>
            <div>
              <label className="block text-sm font-medium text-[#6D6D6D] mb-1">Email</label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#6D6D6D] mb-1">Password</label>
              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                type="password"
                placeholder="Create password"
                className="w-full border border-gray-300 p-3 rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#05238C] text-white py-3 rounded-lg font-semibold mt-8 inline-flex justify-center items-center disabled:opacity-50 cursor-pointer transition-colors duration-300 ease-in-out"
              disabled={isPending}
            >
              {isPending ? <Loader2Icon className="animate-spin" /> : 'Sign in'}
            </button>
          </form>

          <p className="text-xs text-center text-gray-400 mt-4">
            By signing up, you agree to our{' '}
            <a href="#" className="text-black font-semibold">
              Terms & Conditions
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Login
