import { useEffect, useState } from 'react'
import FixedTable from '../components/Dashboard/Table'
import Button from '../components/ui/Button'
import { DashboardTH } from '../hook/dumy-data'
import { useGetMyTransactions } from '../services/queries'

export const Transaction = () => {
  const { data: transactionsData, isSuccess: IsTransactionSuccess } = useGetMyTransactions()
  const [isTransaction, setTransactionData] = useState<boolean>(false)
  
  const transactions = transactionsData?.data?.data

  // Call the transaction
  useEffect(() => {
    // Call the transaction
    if (transactions?.length > 0 && !isTransaction) {
      setTransactionData(true)
      console.log(transactions)

      const timeout = setTimeout(() => {
        setTransactionData(false)
      }, 5000)
      return () => clearTimeout(timeout)
    }
  }, [transactionsData])
  
  return (
    <div className="flex flex-col min-h-screen bg-[#F1F5FF]">
      <div className="flex flex-col w-full h-full px-9 py-9">
        <h1 className="text-2xl font-bold text-primary text-[#031A69]">Transaction History</h1>

        <main className="my-7 p-4 rounded-lg bg-white">
          <div className="flex flex-row justify-between">
            <h1 className="text-lg">April</h1>
            <p>Filter</p>
          </div>

          <section className="my-5">
            <Button
              title={'All Status'}
              style="border border-[#ACBCF0] px-2 text-xs py-1 rounded-lg bg-[#ACBCF0] mr-2 "
            />
            <Button
              title={'Successful'}
              style="border border-[#ACBCF0] px-2 text-xs py-1 rounded-lg mr-2"
            />
            <Button
              title={'Pending'}
              style="border border-[#ACBCF0] px-2 text-xs py-1 rounded-lg mr-2"
            />
            <Button
              title={'Failed'}
              style="border border-[#ACBCF0] px-2 text-xs py-1 rounded-lg mr-2"
            />
          </section>

          <section>
            {IsTransactionSuccess ? (
              <FixedTable columns={DashboardTH} data={transactions} />
            ) : (
              <div></div>
            )
          }
              
          </section>
        </main>
      </div>
    </div>
  )
}
