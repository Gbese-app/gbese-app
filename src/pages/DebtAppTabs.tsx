import { useState } from 'react';
import '../MyDebt.css';
import MyDebts from './MyDebts';
import SelectDebt from './SelectDebt'; 
import DebtShuffle from './DebtShuffle';

function DebtAppTabs() {
  const [tab, setTab] = useState('about');

  return (
    <div className="app-container">

      <div className="app-title-section">
        <div className="app-title-section-text">
          <h1>Debt Shuffle</h1>
          <p>A community-driven debt redistribution program.</p>
        </div>
        <button className="join-button">Join Debt Shuffle</button>
      </div>

      <nav className="app-navigation">
        <button
          className={`nav-item ${tab === 'about' ? 'active' : ''}`}
          onClick={() => setTab('about')}
        >
          About
        </button>
        <button
          className={`nav-item ${tab === 'select' ? 'active' : ''}`}
          onClick={() => setTab('select')}
        >
          Select debt to shuffle
        </button>
        <button
          className={`nav-item ${tab === 'history' ? 'active' : ''}`}
          onClick={() => setTab('history')}
        >
          Shuffle History
        </button>
      </nav>

      <div className="app-content">
        {tab === 'about' && <MyDebts />}
        {tab === 'select' && <SelectDebt />}
        {tab === 'history' && <DebtShuffle />}
      </div>
    </div>
  );
}

export default DebtAppTabs;
