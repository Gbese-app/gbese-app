import { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "1 Point" },
  { option: "2 Points" },
  { option: "Spin Again" },
  { option: "3 Points" },
  { option: "7 Points" },
  { option: "4 Points" },
  { option: "0 Points" },
  { option: "5 Points" },
];

export default ({ activate }: { activate: boolean}) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    < div className="parent-container">
      <Wheel 
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderColor="#161A26C4"
        outerBorderWidth={10}
        innerBorderColor={"#f2f2f2"}
        radiusLineColor={"#161A26C4"}
        radiusLineWidth={3}
        fontSize={20}
        textColors={["#ffffff"]}
        backgroundColors={[
          "#F22B35",
          "#F99533",
          "#24CA69",
          "#514E50",
          "#46AEFF",
          "#9145B7",
          "hotpink",
          "darkblue"
        ]}
        onStopSpinning={() => {
          setMustSpin(false);
          console.log(data[prizeNumber]);
        }}
      />
      <button onClick={handleSpinClick} disabled={!activate} className="border bg-blue-900 text-white text-xs rounded-lg m-2 px-2 py-1">SPIN</button>
      {!mustSpin ? data[prizeNumber].option : "SPINNING..."}
    </div>
  );
};
