import { Link, Outlet } from 'react-router-dom'
import SideBar from '../components/Sidebar'
import { Toaster } from '../components/ui/sonner'
import { useWallet } from '../contexts/WalletContext'
import { useState } from 'react'
import image from '../assets/A6043158-845C-4B3A-99D8-C497A2789229_1_105_c.jpeg'

const Layout = () => {
  const { userAddress } = useWallet()
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="flex w-full h-full flex-col md:flex-row">
      <aside
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } md:block fixed top-0 left-0 h-[100vh] w-full md:w-64 bg-[#021346] text-white sticky z-10`}
      >
        <div className="">
          <button
            className="md:hidden absolute top-4 right-4 text-white font-bold"
            onClick={closeSidebar}
            aria-label="Close sidebar"
          >
            ✕
          </button>

          <SideBar />
        </div>
      </aside>

      <div className="flex-1 bg-[#F1F5FF] md:bg-gray-100 w-auto">
        <div className="flex justify-between items-center px-4 md:p-3 border-b border-gray-300">
          <div className="w-40">
            <div className="md:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 21 21"
                onClick={toggleSidebar}
                className="cursor-pointer"
                aria-label="Toggle sidebar"
              >
                <path
                  fill="none"
                  stroke="#111111"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 6.5h12m-12.002 4h11.997M4.5 14.5h11.995"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>

          <div className="flex py-3 w-70 justify-between items-center md:justify-end">
            <Link to="/withdrawal/gbesepay-wallet" state={{ openWalletPopup: true }}>
              <button className="rounded-lg hover:bg-[#CDD7F6] hover:text-black border border-[#CDD7F6] bg-[#05238C] text-white p-1 px-2 md:p-2 md:mx-1 transition-colors duration-300 ease-in-out">
                {userAddress
                  ? `${userAddress.slice(0, 6)}…${userAddress.slice(-4)}`
                  : 'Connect Wallet'}
              </button>
            </Link>

            <button
              className="rounded-lg border border-[#ACBCF0] bg-[#F1F4FF] p-1 md:p-2 md:mx-1"
              aria-label="Notifications"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.53 14.394c-.213 1.353.738 2.292 1.902 2.76c4.463 1.795 10.673 1.795 15.136 0c1.164-.468 2.115-1.407 1.902-2.76c-.13-.832-.777-1.524-1.256-2.2c-.627-.897-.689-1.874-.69-2.915C19.525 5.26 16.157 2 12 2S4.475 5.26 4.475 9.28c0 1.04-.062 2.018-.69 2.914c-.478.676-1.124 1.368-1.255 2.2M9 21c.796.622 1.848 1 3 1s2.204-.378 3-1"
                />
              </svg>
            </button>

            <img
              className="md:mx-2 h-10 w-10 rounded-full object-cover"
              src={image}
              alt="User profile picture"
              aria-label="User profile"
            />
          </div>
        </div>
        <Outlet context={{ closeSidebar }} />
      </div>

      <Toaster position="top-center" />
    </div>
  )
}

export default Layout
