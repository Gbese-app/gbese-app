import { useNavigate } from 'react-router-dom'

const Walletlist = () => {
  const navigate = useNavigate()

  const wallets = [
    { name: 'GbesePay Wallet', icon: '/images/Frame 301.png' },
    { name: 'MetaMask', icon: '/images/MetaMask.svg' },
    { name: 'CoinBase Wallet', icon: '/images/CoinBase-Wallet.svg' },
    { name: 'Wallet Connect', icon: '/images/Wallet-connect.svg' },
    { name: 'Keplr', icon: '/images/Keplr.svg' },
  ]

  return (
    <div className="min-h-screen bg-white p-8 flex justify-center items-start ">
      <div className="w-full max-w-2xl bg-blue-100 p-6 rounded-xl shadow-lg ">
        <button onClick={() => navigate('/rewards')} className="text-blue-600 font-semibold mb-6">
          &larr; Back
        </button>

        <h2 className="text-2xl font-bold mb-6 text-[#031A69] ">Select Wallet</h2>
        <div className="space-y-4">
          {wallets.map((wallet, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#010B2A] text-white px-4 py-3 rounded-lg cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <img src={wallet.icon} alt={wallet.name} className="w-6 h-6" />
                <span>{wallet.name}</span>
              </div>
              <span className="text-xl">›</span>
            </div>
          ))}
        </div>
        <button
          className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-6 rounded-full font-semibold"
          style={{
            background: 'linear-gradient(to right, #053EFF, #041B6C)',
          }}
        >
          Connect Wallet
        </button>
      </div>
    </div>
  )
}

export default Walletlist
