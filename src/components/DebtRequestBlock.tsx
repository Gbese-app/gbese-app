import { Link } from "react-router-dom"
import Button from "./ui/Button"

interface DebtRequestBlockProps {
    name: string
    date: string
    details: string
    amount: string | number
    onDecline: () => void 
}

interface DebtAcceptBlockProps {
    name: string
    date: string
    details: string
    amount: string | number
    account_number: string
    bank_name: string
}

export const DebtRequestBlock = ({ name, date, details, amount, onDecline }: DebtRequestBlockProps) => {
    return (
        <div className="py-5 flex flex-col justify-between border-b border-[#D1D1D1] cursor-pointer">
            <article className="flex flex-row justify-between">
                <h1 className="text-xl">{name}</h1>
                <p className="text-gray-400 text-sm ">Due Data: {date}</p>
            </article>

            <section className="md:flex md:flex-row justify-between items-end">
                <div className="md:pt-3">
                    <h1 className="text-lg py-2">{details}</h1>
                    <h1 className="text-xl text-start mb-2 font-bold ">{"" + amount}</h1>
                </div>
                            
                <div className="space-x-4 flex flex-row h-10 mb-2">
                    <Link to="/payment-form" state={{ debt: { name, description: details, dueDate: date, amount } }}>
                        <Button title="Accept Request" style="px-6 py-2 text-white bg-[#05238C]" />
                    </Link>
                    <Button title="Decline Request" style="px-6 py-2 text-[#05238C] border border-[#05238C]" onClick={onDecline} />
                </div>
            </section>
        </div>
    )
}

export const DebtAcceptBlock = ({ name, date, details, amount, account_number, bank_name }: DebtAcceptBlockProps) => {
    return (
        <div className="p-5 flex flex-col justify-between rounded-xl bg-white cursor-pointer">
            <article className="flex flex-row justify-between">
                <h1 className="text-xl">{name}</h1>
                <p className="text-gray-400 text-sm ">Due Data: {date}</p>
            </article>

            <section className="md:flex md:flex-row justify-between items-start">
                <div className="md:pt-3">
                    <h1 className="text-lg py-2">{details}</h1>
                    <h1 className="text-xl text-start mb-2 font-bold ">{amount}</h1>
                </div>
                            
                <div className="space-x-4 flex flex-row h-10 md:pt-3">
                    <p className="text-lg">{account_number} - {bank_name}</p>
                </div>
            </section>
        </div>
    )
}