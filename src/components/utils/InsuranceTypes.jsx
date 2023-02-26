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
  const [arrow, setArrow] = useState("");

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
        const back = data.find((icon) => icon.name === "arrow-back");
        setArrow(back);
      });
  }, []);

  useEffect(() => {
    setStep(0);
  }, [selectedInsurance]);

  const getArrow = () => {
    if (step < getMaxSteps() - 2) {
      return <Media name="arrow-forward" />;
    }
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
            <ReactSVG src={arrow.path} wrapper="div" />
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
