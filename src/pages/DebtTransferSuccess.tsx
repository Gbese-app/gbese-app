// src/pages/DebtTransferSuccess.tsx
import { useLocation } from 'react-router-dom';

export default function DebtTransferSuccess() {
  const location = useLocation();
  const data = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <div className="text-green-500 text-4xl mb-4">✔</div>
        <h2 className="text-xl font-semibold mb-4">Debt transfer successful</h2>
        <div className="text-left space-y-2 text-sm">
          <p><strong>Debt Receiver:</strong> {data.receiver || 'N/A'}</p>
          <p><strong>Date:</strong> {data.date || '21/04/25'}</p>
          <p><strong>Request Description:</strong> {data.description || '—'}</p>
          <p><strong>Debtor:</strong> {data.debtor || 'Jones Charles'}</p>
          <p><strong>Outstanding Debt:</strong> ₦{data.amount || '0'}</p>
        </div>
      </div>
    </div>
  );
}
