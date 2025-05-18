import { useState } from 'react'
import { WalletIcon } from '../svg/Icons'

interface BlockProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  wrapperClassName?: string
  headerIconClassName?: string
  balanceWrapperClassName?: string
  label?: string
  amountClassName?: string
  amount?: string
  eyeColor?: string
  linkText?: string
  linkHref?: string
  amount_color?: string
}

export const Block = ({
  Icon = WalletIcon,
  wrapperClassName = '',
  headerIconClassName = '',
  balanceWrapperClassName = '',
  label = 'Available Balance',
  amountClassName = '',
  amount = 'N100,000',
  eyeColor = '#161A26',
  linkText = 'Fund Wallet',
  linkHref = '#',
}: BlockProps) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false)

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible)
  }

  return (
    <div className={`md:w-full ${wrapperClassName}`}>
      <div className={`p-2 w-fit rounded-full ${headerIconClassName}`}>
        <Icon width={18} height={18} />
      </div>

      <div className={`flex flex-row w-50 md:w-auto items-center ${balanceWrapperClassName}`}>
        <p className="text-lg m-0 p-0">{label}</p>
        <button onClick={toggleBalanceVisibility}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
            <path
              fill={eyeColor}
              d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25"
            />
            <path
              fill={eyeColor}
              d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
            />
          </svg>
        </button>
      </div>

      <div className={`font-sora ${amountClassName}  font-bold py-2`}>
        <p className={`~ balance-amount`}>
          {isBalanceVisible ? `${amount.toLocaleString()}` : '* * * * * *'}
        </p>
      </div>

      <a href={linkHref} className="text-xs pointer underline text-[021346]">
        {linkText}
      </a>
    </div>
  )
}
