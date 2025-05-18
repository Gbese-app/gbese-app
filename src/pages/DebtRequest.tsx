import { useEffect, useState } from 'react'
import BalanceCards from './BalanceCards'
import '../DebtRequest.css'
import { DebtRequestBlock } from '../components/DebtRequestBlock'
import { getUserDebtRequests } from '../services/api'
import { DebtRequest } from '../types/general'
import { convertDate } from '../lib/helpers'


const DebtRequests = () => {
  const [debtRequests, setDebtRequests] = useState<DebtRequest[]>([  ])

  const [apiDebtRequests, setApiDebtRequests] = useState<DebtRequest[] | null>(null)
  const [isDebtRequestSuccess, setIsDebtRequestSuccess] = useState(false)

  useEffect(() => {
    const fetchDebtRequests = async () => {
      try {
        const response = await getUserDebtRequests()
        setApiDebtRequests(response)
        setIsDebtRequestSuccess(true)
        console.log(response)
      } catch (error) {
        console.error('Failed to fetch debt requests:', error)
        setIsDebtRequestSuccess(false)
      }
    }

    fetchDebtRequests()
  }, [])

  // Update state when API call succeeds
  useEffect(() => {
    if (isDebtRequestSuccess && apiDebtRequests) {
      setDebtRequests(apiDebtRequests)
    }
  }, [isDebtRequestSuccess, apiDebtRequests])

  const handleDeclineRequest = (index: number) => {
    console.log('Decline request', index)
    setDebtRequests((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="page-container p-5 md:p-9">
      <BalanceCards />
      {/* Debt Requests */}
      <div>
        <h2 className="section-title border-b ">Debt Requests</h2>
        <div>
          {debtRequests.map((request, index) => (
            <div key={index} className="debt-contents">
              <hr />
              <DebtRequestBlock
                name={request.debtor.name}
                date={convertDate(request.createdAt)}
                details={request.description || ''}
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
