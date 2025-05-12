import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NftDetailsPage from './pages/NftDetailsPage';
import RewardsPage from './pages/RewardsPage';  // Assuming you have this page
import Sidebar from './components/Sidebar';
import PointsDetailsPage from './pages/PointsDetailsPage';
import Walletlist from './pages/Walletlist';
import CompletePurchasPage from './pages/CompletePurchasPage';

const App = () => {
  return (
    <Router>
          <Routes>
          <Route path="/" element={<Sidebar/>} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/nft/:nftName" element={<NftDetailsPage />} /> 
            <Route path="/complete-purchase" element={<CompletePurchasPage/>} />
            <Route path="/points-details" element={<PointsDetailsPage />} />
            <Route path="/wallet-list" element={<Walletlist />} />
          </Routes>
        
   
    </Router>
  );
};

export default App;
