import InsuranceForm from "./insurance/InsuranceForm";
import Sidebar from "./Sidebar";
import ProgressBar from "./ProgressBar";
import "../styles/components/Main.scss";
import { useState } from "react";

const Main = () => {
  const [selectedInsurance, setSelectedInsurance] = useState("Casco");
  const [step, setStep] = useState(0);

  const handleClick = (click) => {
    if (click === "forward") {
      setStep(step + 1);
    } else if (click === "back") {
      setStep(step - 1);
    } else if (click === "reset") {
      setStep(0);
    }
  };
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

  const handleSelectedInsurance = (insurance) => {
    setSelectedInsurance(insurance);
  };

  return (
    <section className="main-container">
      <Sidebar />
      <InsuranceForm
        step={step}
        insuranceSteps={insuranceSteps}
        handleClick={handleClick}
        handleSelectedInsurance={handleSelectedInsurance}
        selectedInsurance={selectedInsurance}
      />
      <ProgressBar
        selectedInsurance={selectedInsurance}
        step={step}
        insuranceSteps={insuranceSteps}
      />
    </section>
  );
};

export default Main;
