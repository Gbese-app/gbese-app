import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<"marketplace" | "collection" | "LuckyWheel">(
    location.state?.activeTab || "marketplace"
  );

  const handlePurchase = (nftName: string) => {
    if (nftName === "King Ape") {
    
      navigate(`/nft/${nftName.toLowerCase().replace(" ", "-")}`, {
        state: { nft: nftList.find((nft) => nft.name === nftName) },
      });
    } else {
   
      alert("Details not available for now");
    }
  };

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
          <div className="flex gap-x-6 border-b border-gray-300 mb-6">
            <button
              className={`text-xl xl:text-base font-bold pb-2 px-2 sm:px-4 transition border-b-2 ${
                activeTab === "marketplace"
                  ? "border-blue-600 text-[#031A69]"
                  : "border-transparent text-gray-500 hover:text-[#031A69]"
              }`}
              onClick={() => {
                setActiveTab("marketplace");
                navigate("/rewards", { state: { activeTab: "marketplace" } });
              }}
            >
              NFT Marketplace
            </button>
            <button
              className={`text-xl xl:text-base font-bold pb-2 px-2 sm:px-4 transition border-b-2 ${
                activeTab === "collection"
                  ? "border-blue-600 text-[#031A69]"
                  : "border-transparent text-gray-500 hover:text-[#031A69]"
              }`}
              onClick={() => {
                setActiveTab("collection");
                navigate("/rewards", { state: { activeTab: "collection" } });
              }}
            >
              Your Collection
            </button>
            <button
              className={`text-xl xl:text-base font-bold pb-2 px-2 sm:px-4 transition border-b-2 ${
                activeTab === "LuckyWheel"
                  ? "border-blue-600 text-[#031A69]"
                  : "border-transparent text-gray-500 hover:text-[#031A69]"
              }`}
              onClick={() => {
                setActiveTab("LuckyWheel");
                navigate("/rewards", { state: { activeTab: "LuckyWheel" } });
              }}
            >
              Lucky Wheel
            </button>
          </div>

          {activeTab === "marketplace" && (
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-2">
              {nftList.map((nft, index) => (
                <div
                  key={index}
                  className="bg-[#E4EAFD] p-5 rounded-xl shadow flex flex-col w-full max-w-sm"
                >
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-48 md:h-56 object-cover rounded mb-2"
                  />
                  <h2 className="text-[#111111] text-xl font-semibold mb-1">{nft.name}</h2>
                  <p className="text-sm text-[#111111] mb-1">By {nft.creator}</p>
                  <div className="flex justify-between items-center w-full mb-0">
                    <div>
                      <p className="text-xl text-[#111111] mb-1">Current Bid</p>
                      <p className="text-md font-semibold flex items-center gap-1 text-[#111111]">
                        <img
                          src="/images/mdi-ethereum-icon.png"
                          alt="ETH"
                          className="w-6 h-6"
                        />
                        {nft.bid}
                      </p>
                    </div>
                    <button
                      onClick={() => handlePurchase(nft.name)}
                      className="bg-[#CDD7F6] hover:bg-blue-700 text-[#021346] text-sm sm:text-md font-medium px-3 py-2 rounded"
                    >
                      Purchase NFT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "collection" && (
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

          {activeTab === "LuckyWheel" && (
            <div className="flex flex-col py-10 px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#031A69] mb-2 ">
                Spin Wheel and earn Points
              </h2>
              <p className="text-gray-600 mb-8 ">
                Spin, earn, collect. Trade your XP for cool NFT drops!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
