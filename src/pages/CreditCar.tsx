
import { Link } from "react-router-dom";
import { creditOption } from "../data/type";

type Props = {
    option: creditOption;
}


const CreditCard = ({option} : Props) => (
    <div className="bg-white border rounded-md p-4 shadow-md w-full max-w-sm">
        <h2 className="font-semibold text-lg">{option.name}</h2>
        <p>Interest rate: {option.interestRate}%</p>
        <p>Terms: {option.terms}</p>
        <p>Min-Max: #{option.minAmount.toLocaleString()} - #{option.maxAmount.toLocaleString()}</p>
        <Link to="/loan-form">
        <button className="bg-blue-700 text-white w-full mt-4 py-2 rounded">Apply Now</button>
        </Link>
    </div>
);

export default CreditCar;