import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const PointsDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10 bg-gray-100 min-h-screen relative">
        <h1 className="text-3xl font-bold mb-6">Your Rewards</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Your Points</h2>
            <div className="flex items-center space-x-4">
              <img src="images/Frame-logo (1).png" alt="Points Icon" className="w-19 h-19" />
              <div>
                <h3 className="text-lg font-semibold">Available Points</h3>
                <p className="text-3xl font-bold text-black-600">120 XP</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Redeem for:</h3>
              <ul className="space-y-2">
                <li className="flex justify-between border p-3 rounded">
                  <span>Free Transfer</span>
                  <span className="font-semibold">50 Pts</span>
                </li>
                <li className="flex justify-between border p-3 rounded">
                  <span>Cashback Reward</span>
                  <span className="font-semibold">100 Pts</span>
                </li>
                <li className="flex justify-between border p-3 rounded">
                  <span>Premium NFT</span>
                  <span className="font-semibold">500 Pts</span>
                </li>
              </ul>
            </div>
          </div>

        
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-xl font-semibold mb-2">Spin Wheel and earn Points</h2>
            <p className="mb-4">Spin, earn, collect. Trade your XP for cool NFT drops!</p>
            <div className="flex justify-center items-center mb-4">
              <img src="#" alt="Spin Wheel" className="w-40 h-40" />
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              SPIN
            </button>
          </div>
        </div>

        
        <div className="absolute bottom-10 right-10">
        <div className="absolute bottom-10 right-10">
  <button
    onClick={() => navigate("/rewards")}
    className="bg-white text-blue-600 border border-blue-600 px-8 py-2 rounded-md hover:bg-blue-50 whitespace-nowrap"
  >
    Return to Homepage
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default PointsDetailsPage;