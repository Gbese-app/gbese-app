import { AwardBadgeIcon } from './svg/Icons'
import { NavButton } from './ui/Navbutton'

const Sidebar = () => {
  return (
    <div className="size-full flex flex-col px-4 py-6">
      <div className="flex flex-row items-center">
        <img src="/LogoDarkBG.png" alt="gbese" className="h-12 w-25" />
      </div>
      <div className="flex flex-col py-6">
        <NavButton
          text="Dashboard"
          page="/dashboard"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m0 12h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m10-4h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1m0-8h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"
              />
            </svg>
          }
        />

        <NavButton
          text="My Debts"
          page="/mydebt"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
              </g>
            </svg>
          }
        />
        <NavButton
          text="Fund Wallet"
          page="/fundwallet"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
              </g>
            </svg>
          }
        />
        <NavButton
          text="Withdrawal Funds"
          page="/withdrawal"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                d="M22 2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M7 20v-2a2 2 0 0 1 2 2Zm10 0h-2a2 2 0 0 1 2-2Zm0-4a4 4 0 0 0-4 4h-2a4 4 0 0 0-4-4V8h10Zm4-6h-2V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H3V4h18Zm-9 5a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1"
              />
            </svg>
          }
        />
        <NavButton
          text="Credit Options"
          page="/credit"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                d="M14.356 2.595a.25.25 0 0 1 .361-.032l.922.812L12.739 7h1.92l2.106-2.632l1.652 1.457a.25.25 0 0 1 .026.348l-.69.827h1.944a1.75 1.75 0 0 0-.288-2.3l-3.7-3.263a1.75 1.75 0 0 0-2.531.23L8.976 7h1.91zM16.25 14a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM4.5 7.25a.75.75 0 0 1 .75-.75h3.128L9.57 5H5.25A2.25 2.25 0 0 0 3 7.25v10.5A3.25 3.25 0 0 0 6.25 21h12a3.25 3.25 0 0 0 3.25-3.25v-6.5A3.25 3.25 0 0 0 18.25 8h-13a.75.75 0 0 1-.75-.75m0 10.5V9.372q.354.126.75.128h13c.966 0 1.75.784 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-12a1.75 1.75 0 0 1-1.75-1.75"
              />
            </svg>
          }
        />
        <NavButton
          text="Debt Requests"
          page="/debt-request"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
              <g fill="none" stroke="CURRENTCOLOR" stroke-linejoin="round" stroke-width="4">
                <path d="M24 40c11.046 0 20-7.163 20-16S35.046 8 24 8S4 15.163 4 24s8.954 16 20 16Z" />
                <path d="M24 28c5.523 0 10-2.686 10-6s-4.477-6-10-6s-10 2.686-10 6s4.477 6 10 6Z" />
                <path stroke-linecap="round" d="M24 16V8m8 10s2.625-4 7-4m-23 4s-2-4-7-4m9 13s-6 2-7 9m19-9s6.5 2 7 9" />
              </g>
            </svg>
          }
        />
        <NavButton text="Rewards" page="/rewards" icon={<AwardBadgeIcon />} />
        <NavButton
          text="Transaction History"
          page="/transaction"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentcolor"
                d="M12 21q-3.45 0-6.012-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m2.8-4.8L11 12.4V7h2v4.6l3.2 3.2z"
              />
            </svg>
          }
        />
      </div>
    </div>
  )
}

export default Sidebar

// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-[#021346] text-white p-5 flex flex-col gap-6">
//       <div className="flex items-center space-x-2">
//           <img src="/images/Gbeselogo.png" alt="Logo" className="h-8" />
//           <h1 className="text-xl font-bold">Gbese</h1>
//         </div>
//       <nav className="flex flex-col gap-4">
//         <Link to="/" className="hover:bg-blue-700 p-2 rounded">Dashboard</Link>
//         <Link to="/rewards" className="hover:bg-blue-700 p-2 rounded">Rewards</Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
