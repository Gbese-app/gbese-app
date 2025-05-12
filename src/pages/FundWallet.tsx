import { useState } from "react";
import "../FundWallet.css";

const FundWallet: React.FC = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [balance, setBalance] = useState(0); // Initial balance is ₦0
  const [transactions, setTransactions] = useState<
    { date: string;
      amount: string; 
      status: string; 
      method: string }[]
  >([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = () => {
    if (!amount || !paymentMethod) {
      alert("Please enter both amount and payment method.");
      return;
    }

    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    setIsSubmitting(true);
    const newTransaction = {
      date: new Date().toLocaleDateString(),
      amount: `₦${amount}`,
      status: "Pending",
      method: paymentMethod,
    };

    // the new transaction to the transactions state
    setTransactions([newTransaction, ...transactions]);

    setTimeout(() => {
      // Simulate the transaction success/failure after 2 seconds
      setIsSubmitting(false);

      const transactionStatus = Math.random() > 0.5 ? "Successful" : "Rejected";

      setTransactions((prevTransactions) =>
        prevTransactions.map((transaction) =>
          transaction === newTransaction
            ? { ...transaction, status: transactionStatus }
            : transaction
        )
      );

      if (transactionStatus === "Successful") {
        // Update balance after successful transaction
        setBalance((prevBalance) => prevBalance + amountValue);
      }
    }, 2000);
  };

  return (
    <div className="fund-wallet-container p-9">
      <h2 className="title">Fund Your Wallet</h2>
      <p className="subtitle">
        Add money to your wallet sharp sharp; make gbese no hold you!
      </p>

      <div className="wallet-balance-card">
        <div className="balance-icon-section">
          <span className="wallet-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
          </span>
          <div className="balance-info">
            <p className="balance-label">Available Wallet Balance</p>
            <h1 className="balance-amount">
              {isBalanceVisible ? `₦${balance.toLocaleString()}` : "● ● ● ● ● ●"}
            </h1>
            <small className="balance-link">Fund Wallet</small>
          </div>
        </div>

        <span className="eye-icon" onClick={toggleBalanceVisibility}>
          {isBalanceVisible ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#000" d="m18.67 16.973 2.755 2.755-.849.848L3.85 3.85 4.697 3l2.855 2.855C8.932 5.303 10.432 5 12 5c4.808 0 8.972 2.848 11 7a12.65 12.65 0 0 1-4.33 4.973M8.486 6.79l1.664 1.664a4 4 0 0 1 5.398 5.398l2.255 2.255c1.574-1 2.904-2.403 3.845-4.106C19.686 8.45 16.034 6.2 12 6.2a10.8 10.8 0 0 0-3.514.59m6.152 6.152a2.8 2.8 0 0 0-3.579-3.579zm1.81 5.204c-1.38.552-2.88.855-4.448.855-4.808 0-8.972-2.848-11-7a12.65 12.65 0 0 1 4.33-4.973l.867.867A11.36 11.36 0 0 0 2.352 12c1.962 3.55 5.614 5.8 9.648 5.8a10.8 10.8 0 0 0 3.514-.59l.934.935zM8.453 10.15l.909.91a2.8 2.8 0 0 0 3.579 3.579l.91.908a4 4 0 0 1-5.398-5.398z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#000" d="M12 17.8c4.034 0 7.686-2.25 9.648-5.8C19.686 8.45 16.034 6.2 12 6.2S4.314 8.45 2.352 12c1.962 3.55 5.614 5.8 9.648 5.8M12 5c4.808 0 8.972 2.848 11 7-2.028 4.152-6.192 7-11 7s-8.972-2.848-11-7c2.028-4.152 6.192-7 11-7m0 9.8a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6" />
            </svg>
          )}
        </span>
      </div>

      <div className="details-section">
        <h3>Details</h3>

        <label htmlFor="amount" className="input-label">Amount (₦)</label>
        <input
          type="text"
          id="amount"
          placeholder="Enter Amount."
          className="input-field"
          value={amount}
          onChange={handleAmountChange}
        />

        <label htmlFor="payment" className="input-label">Payment Method</label>
        <select
          id="payment"
          className="input-field"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <option value="" disabled selected>Select a payment method</option>
          <option value="Gbese Pay">Gbese Pay</option>
          <option value="Card">Card</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>

        <div className="checkbox-wrapper">
          <input type="checkbox" id="attach-debt" />
          <label htmlFor="attach-debt">Attach debt obligations</label>
        </div>

        <button
          className="fund-button"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Funding..." : "Fund Wallet"}
        </button>
      </div>

      {/* Recent Transactions Section */}
      {transactions.length > 0 && (
        <div className="transactions-section">
          <h3 className="transactions-title">Recent Transactions</h3>
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Method</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.amount}</td>
                  <td className={transaction.status.toLowerCase()}>{transaction.status}</td>
                  <td>{transaction.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FundWallet;
