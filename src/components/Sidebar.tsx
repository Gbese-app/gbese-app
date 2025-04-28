import image from "../assets/Vector-2.png";
import { NavButton } from "./ui/Navbutton";

const Sidebar = () => {
  return (
    <div className="size-full flex flex-col px-4 py-6">
        <div className="flex flex-row items-center">
            <img src={image} alt="gbese" className="p-1.5 bg-white rounded-md"/>
            <span className="font-sora font-bold text-[20px] leading-[100%] tracking-[0%] px-2">Gbese</span>
        </div>
        <div className="flex flex-col py-6 ">
            <NavButton
                text="Dashboard"
                className="mb-4"
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
                className="mb-4"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                        </g>
                    </svg>
                }
            />
            <NavButton
                text="Fund Wallet"
                className="mb-4"

                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                        </g>
                    </svg>
                }
            />
            <NavButton
                text="Withdrawal Funds"
                className="mb-4"

                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#fff" d="M22 2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M7 20v-2a2 2 0 0 1 2 2Zm10 0h-2a2 2 0 0 1 2-2Zm0-4a4 4 0 0 0-4 4h-2a4 4 0 0 0-4-4V8h10Zm4-6h-2V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H3V4h18Zm-9 5a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1" />
                    </svg>
                }
            />
            <NavButton
                text="Credit Options"
                className="mb-4"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#fff" d="M14.356 2.595a.25.25 0 0 1 .361-.032l.922.812L12.739 7h1.92l2.106-2.632l1.652 1.457a.25.25 0 0 1 .026.348l-.69.827h1.944a1.75 1.75 0 0 0-.288-2.3l-3.7-3.263a1.75 1.75 0 0 0-2.531.23L8.976 7h1.91zM16.25 14a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM4.5 7.25a.75.75 0 0 1 .75-.75h3.128L9.57 5H5.25A2.25 2.25 0 0 0 3 7.25v10.5A3.25 3.25 0 0 0 6.25 21h12a3.25 3.25 0 0 0 3.25-3.25v-6.5A3.25 3.25 0 0 0 18.25 8h-13a.75.75 0 0 1-.75-.75m0 10.5V9.372q.354.126.75.128h13c.966 0 1.75.784 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-12a1.75 1.75 0 0 1-1.75-1.75" />
                    </svg>
                }
            />
        </div>
      
    </div>
  );
};

export default Sidebar;
