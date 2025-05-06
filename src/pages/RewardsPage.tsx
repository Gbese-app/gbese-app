import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinthewheel from '../components/Dashboard/Spinthewheel'

const nftList = [
  {
    name: 'King Ape',
    creator: 'Ralph Edwards',
    bid: '1.52 ETH',
    image: '/images/king-ape.png',
  },
  {
    name: 'Street Legend',
    creator: 'Marvin McKinney',
    bid: '2.78 ETH',
    image: '/images/street-legend.png',
  },
  {
    name: 'Boss Ape',
    creator: 'Annette Black',
    bid: '1.78 ETH',
    image: '/images/boss-ape.png',
  },
  {
    name: 'Party Ape',
    creator: 'Esther Johnson',
    bid: '2.45 ETH',
    image: '/images/party-ape.png',
  },
  {
    name: 'Pilgrim Ape',
    creator: 'Khalid Mohammed',
    bid: '4.12 ETH',
    image: '/images/pilgrim-ape.png',
  },
  {
    name: 'Space Ape',
    creator: 'Alex Turner',
    bid: '8.24 ETH',
    image: '/images/space-ape.png',
  },
  {
    name: 'Chill Ape',
    creator: 'Martinez Joe',
    bid: '8.24 ETH',
    image: '/images/chill-ape.png',
  },
  {
    name: 'Rabel Ape',
    creator: 'Jordan Blake',
    bid: '8.24 ETH',
    image: '/images/rabal-ape.png',
  },
  {
    name: 'Battle Ape',
    creator: 'Chris Njoku',
    bid: '8.24 ETH',
    image: '/images/battle-ape.png',
  },
]

const RewardsPage = () => {
  const [activeTab, setActiveTab] = useState<'marketplace' | 'collection' | 'LuckyWheel'>(
    'marketplace'
  )
  const navigate = useNavigate()

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
            <p className="text-xl font-bold mt-7">75 GBESE</p>
          </div>
        </div>

        <div className="">
          <div className="flex mb-6 rounded-lg">
            <button
              className={`px-4 py-2 rounded-lg text-xl font-semibold ${
                activeTab === 'marketplace' ? 'bg-white shadow text-black' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('marketplace')}
            >
              NFT Marketplace
            </button>
            <button
              className={`ml-2 px-4 py-2 rounded-lg text-xl font-semibold ${
                activeTab === 'collection' ? 'bg-white shadow text-black' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('collection')}
            >
              Your Collection
            </button>
            <button
              className={`ml-2 px-4 py-2 rounded-lg text-xl font-semibold ${
                activeTab === 'LuckyWheel'
                  ? 'bg-white shadow text-[#031A69]'
                  : 'text-gray-500 hover:text-[#031A69]'
              }`}
              onClick={() => setActiveTab('LuckyWheel')}
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
                    className="w-full h-48 object-cover rounded mb-2"
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
                    <button className="bg-[#CDD7F6] hover:bg-blue-700 text-[#021346] text-xs font-bold px-3 py-1 rounded">
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
                onClick={() => navigate('/wallet-list')}
                className="w-70 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full"
                style={{
                  background: 'linear-gradient(to right, #053EFF, #041B6C)',
                }}
              >
                Connect Wallet
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
