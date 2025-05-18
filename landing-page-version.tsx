import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import '../GbesePayWallet.css'

// import '../layout/Popupwallet.css'
const GbesePayWallet = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [method, setMethod] = useState('wallet')
  const [showModal] = useState(true)
  const [selectedWallet, setSelectedWallet] = useState(null)

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true)
  }

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false)
  }
  // Assume modal shows by default when wallet is selected
  const navigate = useNavigate() // hook to navigate

  const handleMethodChange = (method) => {
    setMethod(method)
    if (method === 'bank') {
      navigate('/withdrawal') // Navigate to the Bank Account page
    } else if (method === 'wallet') {
      console.log('Wallet method selected')
    }
  }
  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet)
  }
  const handleConnectWallet = () => {
    if (selectedWallet) {
      navigate('/withdraw')
    } else {
      alert('Please select a wallet before proceeding')
    }
  }

  return (
    <div className="min-h-screen bg-[#f3f6fd] px-6 py-8 texat-gray-800">
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
          <p className="text-3xl font-bold text-[#131316]">Γéª100,000</p>
          <p className="text-xs text-blue-600 mt-1">Fund Wallet</p>
        </div>
        <FaEye className="text-gray-400 text-xl cursor-pointer" />
      </div>

      {/* Withdrawal Methods */}
      <div className="bg-white p-5 rounded-lg shadow-sm mb-6 h-40">
        <p className="font-semibold text-[#131316] mb-1">Withdrawal Methods</p>
        <p className="text-sm text-[#56616B] mb-4">
          Choose where you want your gbese cash to land.
        </p>
        <div className="flex justify-between space-x-4">
          <button
            className={`px-4 py-2 w-100 rounded border ${method === 'bank' ? 'bg-[#EFF4FF] border-[#2E5BFF] text-[#2E5BFF] font-medium' : 'border-[#CED4DA] text-[#131316] hover:bg-blue-100 text-blue-700'}`}
            onClick={() => handleMethodChange('bank')}
          >
            Bank Account
          </button>
          <button
            className={`px-4 py-2 w-100 rounded border ${method === 'wallet' ? 'bg-[#EFF4FF] border-[#2E5BFF] text-[#2E5BFF] font-medium' : 'border-[#CED4DA] text-[#131316]'}`}
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
          <img src="LogowhiteBG.png" alt="abc" className="h-14 w-30" />
          <div>
            <button className="btn1">GbesePay Wallet</button>
          </div>

          <button
            className="mt-5 w-40 bg-[#031A69] text-white py-2 rounded-lg font-semibold hover:bg-[#031A69] cursor-pointer"
            onClick={openPopup}
          >
            Connect Wallet
          </button>
        </div>
      )}

      {isPopupOpen && (
        <div className="popups-overlay">
          <div className="popups-content">
            <button onClick={closePopup} className="close-button">
              &times; {/* Close button */}
            </button>
            <div className="body">
              <div className="wallet-button" onClick={() => handleWalletSelect('MetaMask')}>
                <img src="/images/MetaMask.svg" alt="" />
                MetaMask
              </div>

              <div className="wallet-button" onClick={() => handleWalletSelect('CoinBase')}>
                <img src="/images/CoinBase-Wallet.svg" alt="" />
                CoinBase Wallet
              </div>

              <div className="wallet-button" onClick={() => handleWalletSelect('WalletConnect')}>
                <img src="/images/Wallet-connect.svg" alt="" />
                Wallet connect
              </div>

              <div className="wallet-button" onClick={() => handleWalletSelect('Keplr')}>
                <img src="/images/Keplr.svg" alt="" />
                Keplr
              </div>
              <button className="w-100" onClick={handleConnectWallet}>
                <div className="connect-main-btn">Connect Wallet</div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GbesePayWallet
