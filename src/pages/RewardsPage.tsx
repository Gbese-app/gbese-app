import { useState } from 'react'
import Spinthewheel from '../components/Dashboard/Spinthewheel'
import { useLocation, useNavigate } from 'react-router-dom'
import { useWallet } from '../contexts/WalletContext'
import { useGbeseBalance } from '../hook/useGbeseBalance'

const nftList = [
  {
    name: 'Sun set',
    creator: 'Ralph Edwards',
    bid: '1.52 ETH',
    image: 'WhatsApp Image 2025-05-12 at 16.34.39 (2).jpeg',
  },
  {
    name: 'Christmas Morning',
    creator: 'Marvin McKinney',
    bid: '2.78 ETH',
    image: 'WhatsApp Image 2025-05-12 at 16.34.39 (3).jpeg',
  },
  {
    name: 'Saturday Morning in Lagos',
    creator: 'Annette Black',
    bid: '1.78 ETH',
    image: 'WhatsApp Image 2025-05-12 at 16.34.40 (4).jpeg',
  },
  {
    name: 'African Madonna',
    creator: 'Esther Johnson',
    bid: '2.45 ETH',
    image: 'WhatsApp Image 2025-05-12 at 16.34.40 (5).jpeg',
  },
  {
    name: 'Freedom',
    creator: 'Khalid Mohammed',
    bid: '4.12 ETH',
    image: 'WhatsApp Image 2025-05-12 at 16.34.40 (6).jpeg',
  },
  {
    name: 'Tales by Moonlight',
    creator: 'Alex Turner',
    bid: '8.24 ETH',
    image: 'WhatsApp Image 2025-05-12 at 16.34.40 (7).jpeg',
  },
  {
    name: 'The Nigerian Hustle',
    creator: 'Martinez Joe',
    bid: '8.24 ETH',
    image: 'WhatsApp Image 2025-05-12 at 16.34.41 (1).jpeg',
  },
  {
    name: 'Reincarnation',
    creator: 'Jordan Blake',
    bid: '8.24 ETH',
    image: 'WhatsApp Image 2025-05-12 at 16.34.41 (2).jpeg',
  },
  {
    name: 'Parenthood',
    creator: 'Chris Njoku',
    bid: '8.24 ETH',
    image: 'WhatsApp Image 2025-05-12 at 16.34.42.jpeg',
  },
]

const RewardsPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { userAddress } = useWallet()
  const balance = useGbeseBalance(userAddress)

  const [activeTab, setActiveTab] = useState<'marketplace' | 'collection' | 'LuckyWheel'>(
    location.state?.activeTab || 'marketplace'
  )

  const handlePurchase = (nftName: string) => {
    if (nftName === 'Sun set') {
      navigate(`/rewards/nft/${nftName.toLowerCase().replace(' ', '-')}`, {
        state: { nft: nftList.find((nft) => nft.name === nftName) },
      })
    } else {
      alert('Details not available for now')
    }
  }

  return (
    <div className="flex">
      <div className="flex-1 p-9 bg-[#F1F5FF] min-h-screen">
        <h1 className="text-3xl font-bold mb-1 text-[#031A69]">Rewards</h1>
        <p>Earn points and redeem reward</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6 mt-10">
          <div
            onClick={() => navigate('/rewards/points-details')}
            className="bg-white px-3 py-5 rounded-xl shadow cursor-pointer transition hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Your Points</h2>
              <img src="images/Framelogo-1.png" alt="" />
            </div>
            <p className="text-xl font-bold mb-2">120 XP</p>
            <p className="text-grey mb-4">Earn more by helping others</p>
          </div>

          <div className="bg-white px-3 py-5 rounded-xl shadow flex flex-col">
            <div className="flex items-center justify-between ">
              <h2 className="text-xl font-semibold">Gbese Tokens</h2>
              <img src="images/Framelogo2.png" alt="" />
            </div>

            <p className="text-xl font-bold mt-7">{balance !== null ? `${balance} GBT` : '--'}</p>
            <button className="mt-5 w-40 bg-[#031A69] text-white py-2 rounded-lg  hover:bg-[#031A69] cursor-pointer">
              Verify wallet
            </button>
          </div>
        </div>

        <div className="">
          <div className="flex mb-6 rounded-lg">
            <button
              className={`px-4 py-2 rounded-lg text-xl font-semibold ${
                activeTab === 'marketplace' ? 'bg-white shadow text-black' : 'text-gray-500'
              }`}
              onClick={() => {
                setActiveTab('marketplace')
                navigate('/rewards', { state: { activeTab: 'marketplace' } })
              }}
            >
              NFT Marketplace
            </button>
            <button
              className={`ml-2 px-4 py-2 rounded-lg text-xl font-semibold ${
                activeTab === 'collection' ? 'bg-white shadow text-black' : 'text-gray-500'
              }`}
              onClick={() => {
                setActiveTab('collection')
                navigate('/rewards', { state: { activeTab: 'collection' } })
              }}
            >
              Your Collection
            </button>
            <button
              className={`ml-2 px-4 py-2 rounded-lg text-xl font-semibold ${
                activeTab === 'LuckyWheel'
                  ? 'bg-white shadow text-[#031A69]'
                  : 'text-gray-500 hover:text-[#031A69]'
              }`}
              onClick={() => {
                setActiveTab('LuckyWheel')
                navigate('/rewards', { state: { activeTab: 'LuckyWheel' } })
              }}
            >
              Lucky Wheel
            </button>
          </div>

          {activeTab === 'marketplace' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-15 justify-items-center">
              {nftList.map((nft, index) => (
                <div
                  key={index}
                  className="bg-[#E4EAFD] p-2 rounded-xl shadow flex flex-col w-full sm:w-[90%] lg:w-[95%] max-w-[360px] gap-x-10"
                >
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-48 md:h-56 object-cover rounded mb-2"
                  />
                  <h2 className="text-[#111111] text-xl font-semibold mb-1">{nft.name}</h2>
                  <p className="text-xs text-[#111111] mb-3">By {nft.creator}</p>
                  <div className="flex justify-between items-center w-full mb-0">
                    <div className="">
                      <p className="text-xs text-[#111111] mb-1">Current Bid</p>
                      <p className="text-xs font-semibold flex items-center gap-1 text-[#111111]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="021346"
                            d="M12 0L4.63 12.22L12 16.574l7.37-4.354zm0 24L4.63 13.617L12 18l7.37-4.383z"
                          />
                        </svg>
                        {nft.bid}
                      </p>
                    </div>
                    <button
                      onClick={() => handlePurchase(nft.name)}
                      className="bg-[#CDD7F6] hover:bg-blue-700 text-[#021346] text-xs font-bold px-3 py-1 rounded"
                    >
                      Purchase NFT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'collection' && (
            <div className="flex flex-col items-center justify-center py-16">
              <img src="/images/ethereum-logo.png" alt="Ethereum Logo" className="w-30 h-30 mb-6" />
              <h2 className="text-2xl font-bold mb-2">Your NFT Collection</h2>
              <p className="mb-7 text-grey">Connect your wallet to view your NFTs</p>
              <button
                onClick={() => navigate('/rewards/wallet-list')}
                className="w-70 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full"
                style={{
                  background: 'linear-gradient(to right, #053EFF, #041B6C)',
                }}
              >
                {userAddress
                  ? `${userAddress.slice(0, 6)}…${userAddress.slice(-4)}`
                  : 'Connect Wallet'}
              </button>
            </div>
          )}

          {activeTab === 'LuckyWheel' && (
            <div className="flex flex-col py-10 px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#031A69] mb-2 ">
                Spin Wheel and earn Points
              </h2>
              <p className="text-gray-600 mb-8 ">
                Spin, earn, collect. Trade your XP for cool NFT drops!
              </p>

              <div className="flex flex-col items-center text-center">
                <Spinthewheel activate={true} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RewardsPage
