import { useEffect, useState } from 'react'
// import { FaEye } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom'
import { useWallet } from '../contexts/WalletContext'
import '../layout/GbesePayWallet.css'

export default function GbesePayWallet() {
  const location = useLocation()
  const { userAddress, setUserAddress } = useWallet()
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)
  const [detectedWallets, setDetectedWallets] = useState<string[]>([])

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000)
      return () => clearTimeout(timer) // Cleanup on unmount
    }
  }, [showPopup])

  useEffect(() => {
    const checkWallets = () => {
      const wallets = []

      // Check for MetaMask
      if (window.ethereum?.isMetaMask) {
        wallets.push('MetaMask')
      }

      if (window.ethereum?.isTrust) {
        wallets.push('isTrust')
      }

      // Check for Keplr
      if (window.keplr) {
        wallets.push('Keplr')
      }

      console.log(window.ethereum)
      setDetectedWallets(wallets)
    }

    checkWallets()
  }, [])

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true)
  }

  useEffect(() => {
    if (location.state?.openWalletPopup) {
      setIsPopupOpen(true)
    }
  }, [location.state])

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false)
  }
  const [method, setMethod] = useState('wallet')
  const [showModal] = useState(true) // Assume modal shows by default when wallet is selected
  const navigate = useNavigate() // hook to navigate

  const handleMethodChange = (method: any) => {
    setMethod(method)
    if (method === 'bank') {
      navigate('/withdrawal') // Navigate to the Bank Account page
    } else if (method === 'wallet') {
      navigate('/withdrawal/gbesepay-wallet') // Navigate to the GbesePay Wallet page
    }
  }

  const handleWalletSelect = (wallet: any) => {
    setSelectedWallet(wallet)
  }

  const handleConnectWallet = async () => {
    if (!selectedWallet && !userAddress) {
      alert('Please select a wallet before proceeding')
    }

    try {
      switch (selectedWallet) {
        case 'MetaMask':
          if (!window.ethereum) {
            return alert('MetaMask not installed!')
          }

          // Request account access
          const resp = await window.ethereum.request({
            method: 'eth_requestAccounts',
          })

          if (!Array.isArray(resp) || resp.length === 0) {
            throw new Error('No accounts returned')
          }

          const account = resp[0] as string
          setUserAddress(account)
          closePopup()
          setShowPopup(true)
          break

        // other cases for different wallet accouts
      }

      // navigate("/withdrawal2", { state: { userAddress } });
    } catch (err: any) {
      console.error(err)
      alert('Failed to connect wallet')
    }
  }

  return (
    <div className="min-h-screen bg-[#f3f6fd] p-9 texat-gray-800">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#131316]">Withdraw Your Funds</h1>
        <p className="text-sm text-[#56616B]">
          Cash out sharp sharp. Straight to your bank or wallet, no wahala!..
        </p>
      </div>

      {/* Wallet Balance */}
      <div className="bg-white p-5 rounded-lg shadow-sm flex justify-between items-center mb-6 h-40">
        <div>
          <p className="text-sm text-[#56616B]">Available Wallet Balance</p>
          <p className="text-3xl font-bold text-[#131316]">₦100,000</p>
          <p className="text-xs text-blue-600 mt-1">Fund Wallet</p>
        </div>
        {/* <FaEye className="text-gray-400 text-xl cursor-pointer" /> */}
      </div>

      {/* Withdrawal Methods */}
      <div className="bg-white p-5 rounded-lg shadow-sm mb-6 h-40">
        <p className="font-semibold text-[#131316] mb-1">Withdrawal Methods</p>
        <p className="text-sm text-[#56616B] mb-4">
          Choose where you want your gbese cash to land.
        </p>
        <div className="flex justify-between space-x-4">
          <button
            className={`px-4 py-2 w-full rounded border ${method === 'bank' ? 'bg-[#EFF4FF] border-[#2E5BFF] text-[#2E5BFF] font-medium' : 'border-[#CED4DA] text-[#131316] hover:bg-blue-100 text-blue-700'}`}
            onClick={() => handleMethodChange('bank')}
          >
            Bank Account
          </button>
          <button
            className={`px-4 py-2 w-full rounded border ${method === 'wallet' ? 'bg-[#EFF4FF] border-[#2E5BFF] text-[#2E5BFF] font-medium' : 'border-[#CED4DA] text-[#131316]'}`}
            onClick={() => handleMethodChange('wallet')}
          >
            GbesePay Wallet
          </button>
        </div>
      </div>

      {/* Wallet Connect Section */}
      <div className="bg-white p-5 rounded-lg shadow-sm h-30">
        <p className="font-semibold text-[#131316] mb-1">Withdrawal Details</p>
        <p className="text-sm text-[#56616B] mb-4">
          You never ready to chop money yet! Connect your wallet first.
        </p>
      </div>

      {showModal && (
        <div className="connect">
          <img src="../../public/LogowhiteBG.png" alt="abc" className="h-14 w-30" />
          <div>
            <button className="btn1">GbesePay Wallet</button>
          </div>

          <button
            className="mt-5 w-40 bg-[#031A69] text-white py-2 rounded-lg font-semibold hover:bg-[#031A69] cursor-pointer"
            onClick={openPopup}
          >
            {userAddress ? `${userAddress.slice(0, 6)}…${userAddress.slice(-4)}` : 'Connect Wallet'}
          </button>
        </div>
      )}

      {isPopupOpen && (
        <div className="popups-overlay">
          <div className="popups-content">
            <button onClick={closePopup} className="close-button">
              &times;
            </button>
            <div className="body">
              {detectedWallets.length > 0 ? (
                detectedWallets.map((wallet) => (
                  <div
                    key={wallet}
                    className={`wallet-button ${selectedWallet === wallet ? 'selected-wallet' : ''}`}
                    onClick={() => handleWalletSelect(wallet)}
                  >
                    <img src={`/public/images/${wallet}.svg`} alt={`${wallet} logo`} />
                    {wallet}
                  </div>
                ))
              ) : (
                <div className="no-wallets-message">
                  😢 No wallets detected! Please install a wallet extension.
                </div>
              )}

              {/* Keep the existing connect button */}
              {detectedWallets.length > 0 && (
                <button className="w-full" onClick={handleConnectWallet}>
                  <div className="connect-main-btn">Connect Wallet</div>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="popup-overlay">
          <div className="flex popup-box w-60 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 2048 2048">
              <path
                fill="#13BE41"
                d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z"
              />
            </svg>
            <h3 className="font-bold text-center my-2">Wallet Connected</h3>
            <p className="text-sm">You're good to go. you can now add GBT to your wallet</p>
          </div>
        </div>
      )}
    </div>
  )
}
