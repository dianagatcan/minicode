import InsuranceSelector from "./InsuranceSelector";

import "../../styles/components/InsuranceForm.scss";
import ProgressBar from "./ProgressBar";
import InsuranceTypes from "../utils/InsuranceType";
import { useState } from "react";

const InsuranceForm = () => {
  const [selectedInsurance, setSelectedInsurance] = useState("Casco");

  const changeInsurance = (event) => {
    setSelectedInsurance(event.target.innerText);
  };

  return (
    <section className="container">
      <div className="main">
        <InsuranceSelector changeInsurance={changeInsurance} />
        <InsuranceTypes selectedInsurance={selectedInsurance} />
      </div>
      <ProgressBar />
    </section>
  );
};

export default InsuranceForm;
