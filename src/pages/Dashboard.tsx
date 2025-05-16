import { useEffect, useState } from 'react'
import { Block } from '../components/Dashboard/Blocks'
import { DebtTransfer } from '../components/Dashboard/DebtRequest'
import Spinthewheel from '../components/Dashboard/Spinthewheel'
import FixedTable from '../components/Dashboard/Table'
import { AwardBadgeIcon, WalletIcon } from '../components/svg/Icons'
import { DashboardData, DashboardTH } from '../hook/dumy-data'
import { UserData } from '../types/general'
import { useGetMyTransactions, useGetMyUserDetails } from '../services/queries'

export const Dashboard = () => {
  const [userData, setUserData] = useState<UserData>();
  const { data: userDetailsData, isSuccess: isUserDetailsSuccess } = useGetMyUserDetails();
  const { data: transactionsData, isSuccess: IsTransactionSuccess } = useGetMyTransactions();
  const [isTransaction, setTransactionData] = useState<Boolean>(false);

  
  // // const [metadata, setMetadata] = useState<any>(null);

  useEffect(() => {
    setTimeout(() => { 
      setTransactionData(false)
      console.log(transactionsData?.data?.data);

    }, 3000);
  //   if( (transactionsData?.data.data).length > 0 && !isTransaction) {  
  //     setTransactionData(true)
  //   }
  }, [IsTransactionSuccess]);

  useEffect(() => {
    if (isUserDetailsSuccess) {
      localStorage.setItem("metadata-user", JSON.stringify(userDetailsData?.data.metadata));
      localStorage.setItem("current-user", JSON.stringify(userDetailsData?.data.data));
      localStorage.setItem("account", JSON.stringify(userDetailsData?.data.data.account));
      
      const local_info = localStorage.getItem('formData');
      if (local_info) {
        setUserData(JSON.parse(local_info));
      }
    }
  }, [isUserDetailsSuccess]);

  // useEffect(() => {
  //   const meta = getMetaData();
  //   setMetadata(meta);
  // }, []);


  return (
    <div className="flex flex-col min-h-screen bg-[#F1F5FF]">
      <div className="flex flex-col w-full h-full px-5 py-0 md:px-9 md:py-9">
        {/* Intro Text */}
        <div className="">
          <h1 className="text-2xl font-bold text-primary text-[#031A69]">
            How Far, {userData?.firstName || 'Guest'}!
          </h1>
          <p className="mt-1 text-sm text-[#010B2A] text-secondary">
            Time to balance your gbese and stack some XP. No slackin’ today 💪
          </p>
        </div>

        {/* Balance Component */}
        <div className='overflow-x-auto'>
          <div className="flex flex-row mt-10 gap-4 md:gap-10 justify-between mb-2">
            <Block
              Icon={WalletIcon}
              wrapperClassName="py-2 px-4 bg-[#CDD7F6] rounded-xl shadow-md"
              headerIconClassName="text-black-500"
              balanceWrapperClassName="text-xs gap-2 mt-1"
              amountClassName="text-2xl"
              label="Available Balance"
              amount={"₦ " + userDetailsData?.data.data.account.balance}
              eyeColor="white"
              linkText="Fund Wallet"
              linkHref="/fundwallet"
            />

            <Block
              Icon={WalletIcon}
              wrapperClassName="py-2 px-4 bg-[#F9FAFB] rounded-xl shadow-md w-200"
              headerIconClassName="text-red-500 bg-red-100"
              balanceWrapperClassName="text-xs gap-2 mt-1"
              amountClassName="text-2xl text-red-500 mt-1"
              label="My Debt (Gbese)"
              amount="-₦ 250,000"
              linkText="Top Up"
              linkHref="/mydebt"
            />

            <Block
              Icon={AwardBadgeIcon}
              wrapperClassName="py-2 px-4 bg-[#F9FAFB] rounded-xl shadow-md"
              headerIconClassName="text-yellow-500 bg-yellow-50"
              balanceWrapperClassName="text-xs gap-2 mt-1"
              amountClassName="text-2xl mt-1"
              label="XP Earned"
              amount={userDetailsData?.data.data.points + " XP"}
              linkText="View rewards"
              linkHref="/rewards"
            />
          </div>
        </div>
        

        {/* Layouts */}
        <section className="w-full flex flex-col md:flex-row my-10 justify-between ">
          <div className="h-auto w-full md:w-3/4 mr-5">

            {/* Activity Breakdown */}
            <div className="h-auto rounded-xl bg-white p-4 shadow">
              <div className="flex flex-row items-center md:items-start justify-between">
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

                  {isTransaction ? (
                    <div></div>
                  ) : (
                    <div className='flex flex-col pb-5 text-center items-center w-full mx-auto'>
                      <img className='h-60 w-60 my-3' src="cuate.png" alt="" />
                      <p className='text-[#808080]'>Your activity will show here once you start borrowing, repaying, or transferring gbese.</p>
                    </div>
                )}

              </div>
            </div>


            {/* transaction History */}
            <div className="bg-white rounded-xl mt-6 shadow-md">
              <div className="flex flex-row justify-between p-4 px-4 align-center items-center md:items-start">
                <h1 className="text-2xl font-semibold">Transaction History</h1>
                <p className="mx-6">Filter</p>
              </div>
              <div>
              {isTransaction ? (
                  <FixedTable columns={DashboardTH} data={DashboardData} />
                ) : (
                  <div className='flex flex-col pb-5 text-center items-center w-full mx-auto'>
                    <img className='h-40 w-40 my-3' src="rafiki.png" alt="" />
                    <p className='text-[#808080]'>No transactions yet. Once you start flipping gbese, your history will appear here.</p>
                    </div>
                )}

              </div>
            </div>
          </div>

          <div className="h-auto w-full mt-5 md:mt-0 md:w-1/4">
            {/* Spin Wheel */}
            <div className="bg-white rounded-xl text-center p-3 text-[#111111] shadow-md">
              <h1 className="font-bold text-lg">Spin Wheel and earn Points</h1>
              <p className="text-xs ">Spin, earn, collect. Trade your XP for cool NFT drops!</p>
              <div className="w-full mt-3">
                <div className="flex w-full m-auto items-center">
                  <Spinthewheel activate={true}  />
                </div>
                <div className='h-10'></div>
              </div>
            </div>

            {/* Debt Request */}
            <div className=" bg-white rounded-xl mt-6 p-4 text-center shadow-md">
              <h1 className="font-bold text-lg mb-1">Debt Requests</h1>
              <p className="text-xs">
                Accepting requests boosts your XP and unlocks exclusive perks!
              </p>
              <div className="w-full mt-3">
                <div className="flex flex-col">
                  <DebtTransfer name={'JOY IBE'} bill={'N18,000,000'} />
                  <DebtTransfer name={'Amarachi Vitalis'} bill={'N28,000,000'} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
