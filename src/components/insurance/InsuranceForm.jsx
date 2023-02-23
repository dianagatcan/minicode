import InsuranceSelector from "./InsuranceSelector";
import "../../styles/components/InsuranceForm.scss";
import InsuranceTypes from "../utils/InsuranceType";
import { useState } from "react";
import InsuranceDetails from "../utils/InsuranceDetails";

const InsuranceForm = () => {
  const [selectedInsurance, setSelectedInsurance] = useState("Casco");

  const changeInsurance = (event) => {
    setSelectedInsurance(event.target.innerText);
  };

  return (
    <section className="form-container">
      <div className="main">
        <div className="main__selector">
          <InsuranceSelector changeInsurance={changeInsurance} />
        </div>
        <div className="main__form">
          <InsuranceTypes selectedInsurance={selectedInsurance} />
          <InsuranceDetails />
        </div>
        <div className="main__buttons">
          <button>Înapoi</button>
          <button>Înainte</button>
        </div>
      </div>
    </section>
  );
};

export default InsuranceForm;
