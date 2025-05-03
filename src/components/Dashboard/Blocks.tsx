import { WalletIcon } from "../svg/Icons";

interface BlockProps {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    wrapperClassName?: string;
    headerIconClassName?: string;
    balanceWrapperClassName?: string;
    label?: string;
    amountClassName?: string;
    amount?: string;
    linkText?: string;
    linkHref?: string;
}

export const Block = ({
    Icon = WalletIcon,
    wrapperClassName = "",
    headerIconClassName = "",
    balanceWrapperClassName = "",
    label = "Available Balance",
    amountClassName= "",
    amount = "N100,000",
    linkText = "Fund Wallet",
    linkHref = "#",
}: BlockProps) => {
    return (
        <div className={`w-55 ${wrapperClassName}`}>
            <div className={`p-2 w-fit rounded-full ${headerIconClassName}`}>
                <Icon width={18} height={18} />
            </div>

            <div className={`flex flex-row ${balanceWrapperClassName}`}>
                <p>{label}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                    <path fill="#fff" d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25" />
                    <path fill="#fff" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4" />
                </svg>
            </div>

            <div className={`font-sora ${amountClassName} font-bold`}>
                <p>{amount}</p>
            </div>

            <a href={linkHref} className="text-xs">{linkText}</a>
        </div>
    );
};