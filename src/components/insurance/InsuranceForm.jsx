import InsuranceSelector from "./InsuranceSelector";
import "../../styles/components/InsuranceForm.scss";
import InsuranceTypes from "../utils/InsuranceTypes";
import { useEffect, useState } from "react";
import InsuranceDetails from "../utils/InsuranceDetails";

const InsuranceForm = ({
  step,
  insuranceSteps,
  handleClick,
  selectedInsurance,
  handleSelectedInsurance,
}) => {
  const [first, setFirst] = useState("");

  const [second, setSecond] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/insuranceDetails`)
      .then((response) => response.json())
      .then((data) => {
        const details = data.find(
          (media) => media.insuranceType === selectedInsurance
        );
        if (details) {
          setFirst(details.first);
          setSecond(details.second);
        }
      });
  }, [selectedInsurance]);

  const changeInsurance = (event) => {
    if (event.target.innerText) {
      handleSelectedInsurance(event.target.innerText);
    }
  };

  return (
    <section className="form-container">
      <InsuranceSelector changeInsurance={changeInsurance} />
      <div className="form-container__form">
        <InsuranceTypes
          selectedInsurance={selectedInsurance}
          step={step}
          insuranceSteps={insuranceSteps}
          handleClick={handleClick}
        />
        <InsuranceDetails first={first} second={second} />
      </div>
    </section>
  );
};

export default InsuranceForm;
