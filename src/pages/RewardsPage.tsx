import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const nftList = [
  {
    name: "King Ape",
    creator: "Ralph Edwards",
    bid: "1.52 ETH",
    image: "/images/king-ape.png",
  },
  {
    name: "Street Legend",
    creator: "Marvin McKinney",
    bid: "2.78 ETH",
    image: "/images/street-legend.png",
  },
  {
    name: "Boss Ape",
    creator: "Annette Black",
    bid: "1.78 ETH",
    image: "/images/boss-ape.png",
  },
  {
    name: "Party Ape",
    creator: "Esther Johnson",
    bid: "2.45 ETH",
    image: "/images/party-ape.png",
  },
  {
    name: "Pilgrim Ape",
    creator: "Khalid Mohammed",
    bid: "4.12 ETH",
    image: "/images/pilgrim-ape.png",
  },
  {
    name: "Space Ape",
    creator: "Alex Turner",
    bid: "8.24 ETH",
    image: "/images/space-ape.png",
  },

  {
    name: "Chill Ape",
    creator: "Martinez Joe",
    bid: "8.24 ETH",
    image: "/images/chill-ape.png",
  },


  {
    name: "Rabel Ape",
    creator: "Jordan Blake",
    bid: "8.24 ETH",
    image: "/images/rabal-ape.png",
  },

  {
    name: "Battle Ape",
    creator: "Chris Njoku",
    bid: "8.24 ETH",
    image: "/images/battle-ape.png",
  },
];

const RewardsPage = () => {
  const [activeTab, setActiveTab] = useState<"marketplace" | "collection">("marketplace");
  const navigate = useNavigate();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10 bg-[#F1F5FF] min-h-screen">
        <h1 className="text-3xl font-bold mb-1 text-[#031A69]">Rewards</h1>
        <p>Earn points and redeem reward</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6 mt-10">
          <div
            onClick={() => navigate("/points-details")}
            className="bg-white p-6 rounded-xl shadow cursor-pointer transition hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-semibold">Your Points</h2>
              <img src="images/Framelogo-1.png" alt="" />
            </div>
            <p className="text-3xl font-bold mb-2">120 XP</p>
            <p className="text-grey mb-4">Earn more by helping others</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-semibold">Gbese Tokens</h2>
              <img src="images/Framelogo2.png" alt="" />
            </div>
            <p className="text-3xl font-bold mt-7">75 GBESE</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex mb-6 bg-[#E4E8F6] p-2 rounded-lg">
            <button
              className={`px-4 py-2 rounded-lg text-xl font-semibold ${
                activeTab === "marketplace" ? "bg-white shadow text-black" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("marketplace")}
            >
              NFT Marketplace
            </button>
            <button
              className={`ml-2 px-4 py-2 rounded-lg text-xl font-semibold ${
                activeTab === "collection" ? "bg-white shadow text-black" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("collection")}
            >
              Your Collection
            </button>
          </div>
          {activeTab === "marketplace" ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-15 justify-items-center">
    {nftList.map((nft, index) => (
      <div
        key={index}
        className="bg-[#021246] p-5 rounded-xl shadow flex flex-col w-full sm:w-[90%] lg:w-[95%] max-w-[360px] gap-x-10"
      >
        <img
          src={nft.image}
          alt={nft.name}
          className="w-full h-48 object-cover rounded mb-2"
        />
        <h2 className="text-[#F9FAFB] text-xl font-semibold mb-1">{nft.name}</h2>
        <p className="text-sm text-[#CFD0D1] mb-1">By {nft.creator}</p>
        <div className="flex justify-between items-center w-full mb-0">
          <div>
            <p className="text-xl text-[#CFD0D1] mb-1">Current Bid</p>
            <p className="text-md font-semibold flex items-center gap-1 text-white">
              <img src="/images/mdi-ethereum-icon.png" alt="ETH" className="w-6 h-6" />
              {nft.bid}
            </p>
          </div>
          <button className="bg-[#CDD7F6] hover:bg-blue-700 text-[#021346] text-md font-medium px-3 py-2 rounded">
            Purchase NFT
          </button>
        </div>
      </div>
    ))}
  </div>
) : (


            <div className="flex flex-col items-center justify-center py-16">
              <img
                src="/images/ethereum-logo.png"
                alt="Ethereum Logo"
                className="w-30 h-30 mb-6"
              />
              <h2 className="text-2xl font-bold mb-2">Your NFT Collection</h2>
              <p className="mb-7 text-grey">Connect your wallet to view your NFTs</p>
              <button
                onClick={() => navigate("/wallet-list")}
                className="w-70 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full"
                style={{
                  background: "linear-gradient(to right, #053EFF, #041B6C)",
                }}
              >
                Connect Wallet
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
