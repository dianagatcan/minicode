import Rca from "../pages/Rca";
import CarteVerde from "../pages/CarteVerde";
import Casco from "../pages/Casco";
import "../../styles/components/InsuranceTypes.scss";
import React, { useEffect, useState } from "react";
import Media from "./Media";
import { ReactSVG } from "react-svg";

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
  const [arrows, setArrows] = useState([]);

  const getMaxSteps = () => {
    const maxStep = insuranceSteps.find(
      (insurance) => insurance.insuranceType === selectedInsurance
    );
    return maxStep ? maxStep.steps : null;
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/icons`)
      .then((response) => response.json())
      .then((data) => {
        const back = data.filter((icon) =>
          ["arrow-back", "arrow-forward"].includes(icon.name)
        );
        setArrows(back);
      });
  }, []);

  useEffect(() => {
    setStep(0);
  }, [selectedInsurance]);

  const getArrow = () => {
    if (step < getMaxSteps() - 2 && arrows[1]) {
      return <ReactSVG src={arrows[1].path} />;
    }
    <Media name="arrow-forward" />;
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
            {arrows[0] && <ReactSVG src={arrows[0].path} wrapper="div" />}
            Înapoi
          </button>
          <button
            className={step === getMaxSteps() - 1 ? "disabled" : ""}
            onClick={() => {
              setStep(step + 1);
            }}
          >
            {getButtonText()}
            {getArrow()}
          </button>
        </div>
      )}
    </div>
  );
};

export default InsuranceTypes;
