import Rca from "../pages/Rca";
import CarteVerde from "../pages/CarteVerde";
import Casco from "../pages/Casco";
import "../../styles/components/InsuranceTypes.scss";
import { useState } from "react";

const InsuranceTypes = ({ selectedInsurance }) => {
  const insuranceSteps = [
    {
      insuranceType: "Casco",
      steps: 4,
    },
    {
      insuranceType: "Carte verde",
      steps: 3,
    },
    {
      insuranceType: "RCA",
      steps: 5,
    },
  ];
  const [step, setStep] = useState(0);

  const getMaxSteps = () => {
    const maxStep = insuranceSteps.find(
      (insurance) => insurance.insuranceType === selectedInsurance
    );
    return maxStep ? maxStep.steps : null;
  };

  const getButtonText = () => {
    if (step === getMaxSteps() - 1) {
      return "Comandă și achită online";
    } else if (step === getMaxSteps() - 2) {
      return "Vezi costul";
    } else {
      return "Înainte";
    }
  };

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
      {insuranceSteps
        .map((i) => i.insuranceType)
        .includes(selectedInsurance) && (
        <div className="form-container__buttons">
          <button
            className={step === 0 ? "disabled" : ""}
            onClick={() => {
              setStep(step - 1);
            }}
          >
            Înapoi
          </button>
          <button
            className={step === getMaxSteps() - 1 ? "disabled" : ""}
            onClick={() => {
              setStep(step + 1);
            }}
          >
            {getButtonText()}
          </button>
        </div>
      )}
    </div>
  );
};

export default InsuranceTypes;
