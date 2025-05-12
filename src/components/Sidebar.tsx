import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#021346] text-white p-5 flex flex-col gap-6">
      <div className="flex items-center space-x-2">
          <img src="/images/Gbeselogo.png" alt="Logo" className="h-8" />
          <h1 className="text-xl font-bold">Gbese</h1>
        </div>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-blue-700 p-2 rounded">Dashboard</Link>
        <Link to="/rewards" className="hover:bg-blue-700 p-2 rounded">Rewards</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
