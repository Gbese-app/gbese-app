// import { useState } from "react"
// import { DebtAcceptBlock, DebtRequestBlock } from "../components/DebtRequestBlock"

// export const DebtRequest = () => {
//   const [selectedRequest, setSelectedRequest] = useState<{
//     name: string
//     date: string
//     details: string
//     amount: string
//     account_number: string
//     bank_name: string
//   } | null>(null)

//   const handleRequestClick = () => {
//     setSelectedRequest({
//       name: "John Doe",
//       date: "May 18, 2025",
//       details: "Loan repayment for groceries",
//       amount: "₦20,000",
//       account_number: "1234567890",
//       bank_name: "First Bank"
//     })
//   }
//   return (
//     <div className="flex flex-col min-h-screen bg-[#F1F5FF]">
//       <div className="flex flex-col w-full h-full px-5 py-0 md:px-9 md:py-9">
//         <h1 className="text-2xl font-bold text-primary text-[#031A69]">Debt Request</h1>
//         <p className="text-sm text-[#010B2A] mt-1">
//           See debt for your friend hand? Help am throw am away!
//         </p>

//         {/* Balance */}
//         <div className="overflow-x-auto">
//           <div className="flex flex-row gap-3">
//             <main className="my-7 p-4 w-full rounded-lg bg-white alignt-">
//               <div className="flex flex-row justify-between">
//                 <h1 className="text-lg">Available Balance</h1>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
//                   <path
//                     fill="currentcolor"
//                     d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25"
//                   />
//                   <path
//                     fill="curen"
//                     d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
//                   />
//                 </svg>
//               </div>
//               <section className="my-3 w-50" >
//                 <h1 className="text-xl">{"N500,000"}</h1>
//               </section>
//             </main>

//             <main className="my-7 p-4 w-full rounded-lg bg-white">
//               <div className="flex flex-row justify-between">
//                 <h1 className="text-lg">Wallet</h1>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
//                   <path
//                     fill="currentcolor"
//                     d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25"
//                   />
//                   <path
//                     fill="curen"
//                     d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
//                   />
//                 </svg>
//               </div>
//               <section className="my-3 w-50">
//                 <h1 className="text-xl">{"N50,000"}</h1>
//               </section>
//             </main>
//           </div>
//         </div>

//         {/* Debt Request */}
//         <div>
//           <h1 className="text-xl font-bold text-primary py-2 border-b border-[#D1D1D1]">Debt Requests</h1>

//           {!selectedRequest && (
//             <button className="p-0 m-0 w-full" onClick={handleRequestClick}>
//               <DebtRequestBlock
//                 name="John Doe"
//                 date="May 18, 2025"
//                 details="Loan repayment for groceries"
//                 amount="₦20,000"
//               />
//             </button>
//           )}

//           {selectedRequest && (
//             <section>
//               <DebtAcceptBlock
//                 name={selectedRequest.name}
//                 date={selectedRequest.date}
//                 details={selectedRequest.details}
//                 amount={selectedRequest.amount}
//                 account_number={selectedRequest.account_number}
//                 bank_name={selectedRequest.bank_name}
//               />

//               <div className="p-5 flex flex-col justify-between rounded-xl bg-white mt-5">
//                 <h1 className="text-xl font-semibold mb-4">Details</h1>
//                 <form action="" className="flex flex-col space-y-4">

//                   {/* Amount */}
//                   <div>
//                     <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Amount (₦)</label>
//                     <input
//                       type="number"
//                       id="amount"
//                       name="amount"
//                       placeholder="Enter Amount"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>

//                   {/* Narration */}
//                   <div>
//                     <label htmlFor="narration" className="block text-sm font-medium text-gray-700 mb-1">Narration</label>
//                     <input
//                       type="text"
//                       id="narration"
//                       name="narration"
//                       placeholder="What’s this for?"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>

//                   {/* Payment Method */}
//                   <div>
//                     <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
//                     <select
//                       id="paymentMethod"
//                       name="paymentMethod"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                       <option value="">Select a payment method</option>
//                       <option value="card">Card</option>
//                       <option value="bank_transfer">Bank Transfer</option>
//                       <option value="ussd">USSD</option>
//                     </select>
//                   </div>

//                   {/* Attach Debt Obligations */}
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="debtObligations"
//                       name="debtObligations"
//                       className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                     />
//                     <label htmlFor="debtObligations" className="ml-2 block text-sm text-gray-700">
//                       Attach debt obligations
//                     </label>
//                   </div>

//                   <button
//                     type="submit"
//                     className="mt-4 px-6 py-2 bg-[#05238C] text-white rounded-lg hover:bg-blue-700 transition w-50"
//                   >
//                     Confirm Payment
//                   </button>
//                 </form>
//               </div>
//             </section>
//           )}
import { useState } from 'react'
import BalanceCards from './BalanceCards'
import '../DebtRequest.css'
import { DebtRequestBlock } from '../components/DebtRequestBlock'

interface DebtRequest {
  name: string
  description: string
  dueDate: string
  amount: number
}

const DebtRequests = () => {
  const [debtRequests, setDebtRequests] = useState<DebtRequest[]>([
    {
      name: 'Chukwuma Eric',
      description: 'Rent Balance - Shop Boutique',
      dueDate: '30th April, 2025',
      amount: 100000,
    },
    {
      name: 'Ewulu Kenechukwu',
      description: 'Decoder Installment - DSTV',
      dueDate: '30th April, 2025',
      amount: 100000,
    },
    {
      name: 'Okafor Ifeanyi',
      description: 'Mechanic Balance',
      dueDate: '30th April, 2025',
      amount: 100000,
    },
    {
      name: 'Francis Edwin',
      description: 'Medical Bills',
      dueDate: '30th April, 2025',
      amount: 150000,
    },
  ])

  const handleDeclineRequest = (index: number) => {
    console.log('Decline request', index)
    setDebtRequests((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="page-container p-5 md:p-9">
      <BalanceCards />
      {/* Debt Requests */}
      <div>
        <h2 className="section-title">Debt Requests</h2>
        <div>
          {debtRequests.map((request, index) => (
            <div key={index} className="debt-contents">
              <hr />
              <DebtRequestBlock
                name={request.name}
                date={request.dueDate}
                details={request.description}
                amount={request.amount}
                onDecline={() => handleDeclineRequest(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DebtRequests
