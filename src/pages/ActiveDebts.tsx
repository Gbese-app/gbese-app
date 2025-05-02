import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Debt {
  id: number;
  title: string;
  amount: number;
  dueDate: string;
  mpr?: string;
  mprColor?: string;
}

const debts: Debt[] = [
  {
    id: 1,
    title: 'Smartphone Installment - Tecno',
    amount: 100000,
    dueDate: '15th April, 2025',
    mpr: '4% MPR',
    mprColor: 'bg-green-100 text-green-800',
  },
  {
    id: 2,
    title: 'Rent Balance - Lekki Apartment',
    amount: 200000,
    dueDate: '15th April, 2025',
    mpr: '8% MPR',
    mprColor: 'bg-yellow-100 text-yellow-800',
  },
  {
    id: 3,
    title: 'Car Loan',
    amount: 1000000,
    dueDate: '15th April, 2025',
    mpr: '20% MPR',
    mprColor: 'bg-red-100 text-red-800',
  },
];
 const ActiveDebts = () => {

  const navigate = useNavigate();
  const handleTransferClick = (debtId: number) => {
    navigate(`/transfer-debt?debtId=${debtId}`);
  };
  return (
    <div className="bg-[#f5f9ff] min-h-screen p-6">
      <header className="flex justify-between items-center mb-6">
        <div>
        <h1 className="text-2xl font-bold text-[#002060]">My Debts - GBESE</h1>
        <p className="text-sm text-gray-600">Track, manage, and transfer your debt in one place.</p>
        </div>
        <div className="flex gap-4">
        <div className="bg-blue-900 text-white px-4 py-2 rounded cursor-pointer">+ Add Debt</div>
               <div className="bg-purple-600 text-white px-4 py-2 rounded cursor-pointer">Shuffle Debt</div>
              
             </div>
        
      </header>
        

      <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="bg-[#d9e1fc] p-4 rounded flex-1 h-40">
              <h2 className="text-sm text-gray-700 py-0.5">Total Outstanding</h2>
              <p className="text-2xl font-bold py-2">₦300,000</p>
              <div className="flex gap-2">
                <div className="bg-blue-900 text-white px-4 py-0.5 rounded cursor-pointer">
                  Make Payment
                </div>
                <div className="bg-white border border-gray-400 px-4 py-2 rounded opacity-50 cursor-pointer">
                  Transfer Debt
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3 py-1">Due date: 15th April, 2025</p>
            </div>
            <div className="bg-[#f7eaff] p-2 rounded flex-1 h-40">
              <h3 className="font-semibold py-1">Debt Shuffle Program</h3>
              <p className="text-sm text-gray-700 mb-3 py-2">
                Join our community debt redistribution program for potential debt reduction of 5–15%.
              </p>
              <div className='mx-5'>
                <button className="bg-white border px-4 py-1 rounded text-sm cursor-pointer w-80">→ Learn More</button>
          </div>
            </div>
          </div>

     

      {/* Active Debts */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Active Debts</h2>
        <div className="space-y-4">
          {debts.map((debt) => (
            <div key={debt.id} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">{debt.title}</p>
                <p className="text-xl font-bold">₦{debt.amount.toLocaleString()}</p>
                <p className="text-sm text-gray-500">Due date: {debt.dueDate}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                {debt.mpr && (
                  <span className={`text-xs px-2 py-1 rounded-full ${debt.mprColor}`}>
                    {debt.mpr}
                  </span>
                )}
                <div className="flex gap-2">
                  <button className="border px-4 py-2 rounded cursor-pointer">Make Payment</button>
                  <button className="bg-blue-800 text-white px-4 py-2 rounded cursor-pointer" onClick={() => handleTransferClick(debt.id)}>Transfer Debt</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ActiveDebts;
