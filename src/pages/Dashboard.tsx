import BarChartComponent from "../components/Dashboard/BarChartComponent";
import { Block } from "../components/Dashboard/Blocks";
import { DebtTransfer } from "../components/Dashboard/DebtRequest";
import Spinthewheel from "../components/Dashboard/Spinthewheel";
import FixedTable from "../components/Dashboard/Table";
import { AwardBadgeIcon, WalletIcon } from "../components/svg/Icons";
import { DashboardData, DashboardTH } from "../hook/dumy-data";


export const Dashboard = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#F1F5FF]">
            <div className="flex flex-col w-full h-full px-9 py-9">

                {/* Intro Text */}
                <div className="">
                    <h1 className="text-2xl font-bold text-primary text-[#031A69]">How Far, Charles!</h1>
                    <p className="mt-1 text-sm text-[#010B2A] text-secondary">Time to balance your gbese and stack some XP. No slackin’ today 💪</p>
                </div>

                {/* Balance Component */}
                <div className="flex flex-row h-32 mt-10 justify-between ">
                    <Block
                        Icon={WalletIcon}
                        wrapperClassName="py-2 px-4 bg-[#CDD7F6] rounded-xl shadow-md"
                        headerIconClassName="text-black-500"
                        balanceWrapperClassName="text-xs gap-2 mt-1"
                        amountClassName="text-2xl mt-1"
                        label="Available Balance"
                        amount="N100,000"
                        linkText="Fund Wallet"
                        linkHref="/fund-wallet"
                    />

                    <Block
                        Icon={WalletIcon}
                        wrapperClassName="py-2 px-4 bg-[#F9FAFB] rounded-xl shadow-md"
                        headerIconClassName="text-red-500 bg-red-100"
                        balanceWrapperClassName="text-xs gap-2 mt-1"
                        amountClassName="text-2xl text-red-500 mt-1"
                        label="My Debt (Gbese)"
                        amount="-₦250,000"
                        linkText="Top Up"
                        linkHref="/fund-wallet"
                    />

                    <Block
                        Icon={AwardBadgeIcon}
                        wrapperClassName="py-2 px-4 bg-[#F9FAFB] rounded-xl shadow-md"
                        headerIconClassName="text-yellow-500 bg-yellow-50"
                        balanceWrapperClassName="text-xs gap-2 mt-1"
                        amountClassName="text-2xl mt-1"
                        label="XP Earned"
                        amount="250 XP"
                        linkText="View rewards"
                        linkHref="/fund-wallet"
                    />
                </div>

                {/* Layouts */}
                <section className="w-full flex flex-row my-10 justify-between ">
                    <div className="h-auto w-110">
                        {/* transaction History */}
                        <div className="bg-white rounded-xl shadow-md">
                            <div className="flex flex-row justify-between p-4 px-4 align-center">
                                <h1 className="text-2xl font-semibold">Transaction History</h1>
                                <p className="mx-6">Filter</p>
                            </div>
                            <div>
                                <FixedTable columns={DashboardTH} data={DashboardData}/>
                            </div>
                        </div>

                        {/* Activity Breakdown */}
                        <div className="h-90 bg-red-100 mt-6 p-4 shadow">
                            <div className="flex flex-row items-start justify-between">
                                <article>
                                    <h1 className="text-2xl font-semibold">Activity Breakdown</h1>
                                    <p className="text-xs">Weekly debt requests & Repayment</p>
                                </article>

                                <select name="ifeanyi" id="">
                                    <option value="Monthly">Monthly</option>
                                </select>
                            </div>
                            <div className="w-full">
                                    {/* <BarChartComponent /> */}

                                {/* <BarChart width={70} height={50} data={BarChartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="pv" fill="#8884d8" />
                                    <Bar dataKey="uv" fill="#82ca9d" />
                                </BarChart> */}
                            </div>
                        </div>
                    </div>

                    <div className="h-auto w-60 ">
                        {/* Spin Wheel */}
                        <div className="bg-white rounded-xl text-center p-3 text-[#111111] shadow-md">
                            <h1 className="font-bold text-md">Spin Wheel and earn Points</h1>
                            <p className="text-xs ">Spin, earn, collect. Trade your XP for cool NFT drops!</p>
                            <div className="w-full mt-3">
                                <div className="flex  ">
                                    <Spinthewheel activate={true}/>
                                </div>
                                <div className="text-xs mt-10">Spin your first wheel once you’ve earned 10 XP!</div>
                            </div>
                        </div>
                        
                        {/* Debt Request */}
                        <div className=" bg-white rounded-xl mt-6 p-4 text-center shadow-md">
                            <h1 className="font-bold text-md mb-1">Debt requests</h1>
                            <p className="text-xs">Accepting requests boosts your XP and unlocks exclusive perks!</p>
                            <div className="w-full mt-3">
                                <div className="flex flex-col">
                                    <DebtTransfer name={"JOY IBE"} bill={"N18,000,000"}/>
                                    <DebtTransfer name={"Amarachi Vitalis"} bill={"N28,000,000"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}