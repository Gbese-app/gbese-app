import { useNavigate } from "react-router-dom";

const PointsDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="flex-1 p-10 bg-gray-100 min-h-screen flex flex-col items-center justify-center relative">
        <h1 className="text-3xl font-bold mb-6">Your Rewards</h1>

        <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Your Points</h2>
          <div className="flex items-center space-x-4">
            <img src="images/" alt="Points Icon" className="w-16 h-16" />
            <div>
              <h3 className="text-lg font-semibold">Available Points</h3>
              <p className="text-3xl font-bold text-black-600">120 XP</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Redeem for:</h3>
            <ul className="space-y-2">
              <li className="flex justify-between border p-3 rounded text-sm">
                <span>Free Transfer</span>
                <span className="font-semibold">50 Pts</span>
              </li>
              <li className="flex justify-between border p-3 rounded text-sm">
                <span>Cashback Reward</span>
                <span className="font-semibold">100 Pts</span>
              </li>
              <li className="flex justify-between border p-3 rounded text-sm">
                <span>Premium NFT</span>
                <span className="font-semibold">500 Pts</span>
              </li>
            </ul>
          </div>
        </div>

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
  );
};

export default PointsDetailsPage;
