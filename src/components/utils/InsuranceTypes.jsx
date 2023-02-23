import Rca from "../pages/Rca";
import CarteVerde from "../pages/CarteVerde";
import Casco from "../pages/Casco";
import "../../styles/components/InsuranceTypes.scss";
import { useEffect, useState } from "react";

const InsuranceTypes = ({ selectedInsurance }) => {
  const [step, setStep] = useState(0);

  const decideRender = () => {
    switch (selectedInsurance) {
      case "Casco":
        return <Casco step={step} />;
      case "Carte verde":
        return <CarteVerde step={step} />;
      case "RCA":
        return <Rca step={step} />;
      default:
        return <div>Not yet implemented 😅</div>;
    }
  };

  return (
    <div className="left-insurance">
      <div>{decideRender()}</div>
      <div className="form-container__buttons">
        <button
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Înapoi
        </button>
        <button
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Înainte
        </button>
      </div>
    </div>
  );
};

export default InsuranceTypes;
