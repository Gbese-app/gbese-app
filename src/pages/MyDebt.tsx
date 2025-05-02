import React, { useState } from 'react';
import TransferredDebt from './TransferredDebt'; // Now imports the "Select Debt" content
import DebtHistory from './DebtHistory';
import ActiveDebts from './ActiveDebts'; // Now imports the "Shuffle History" content
import "../layout/Popup.css";

function Chief() {
  const [tab, setTab] = useState('about');

  return (
    <div className="app-container">
      {/* <div className="app-title-section">
        <div className="app-title-section-text">
          <h1>Debt Shuffle</h1>
          <p>A community-driven debt redistribution program.</p>
        </div>
        <button className="join-button">Join Debt Shuffle</button>
      </div> */}

      <nav className="app-navigation">
        <button
          className={`nav-item ${tab === 'about' ? 'active' : ''}`} 
          onClick={() => setTab('about')}
         >
          ACtive Debts
        </button>
        <button
          className={`nav-item ${tab === 'select' ? 'active' : ''}`}
          onClick={() => setTab('select')}
        >
          Transferred Debts
        </button>
        <button
          className={`nav-item ${tab === 'history' ? 'active' : ''}`}
          onClick={() => setTab('history')}
        >
          Debt History
        </button>
      </nav>

      <div className="app-content">
        {tab === 'about' && <ActiveDebts />}
        {tab === 'select' && <TransferredDebt />}
        {tab === 'history' && <DebtHistory />}
      </div>
    </div>
  );
}

export default Chief;