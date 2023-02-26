import InsuranceSelector from "./InsuranceSelector";
import "../../styles/components/InsuranceForm.scss";
import InsuranceTypes from "../utils/InsuranceTypes";
import { useEffect, useState } from "react";
import InsuranceDetails from "../utils/InsuranceDetails";

const InsuranceForm = () => {
  const [selectedInsurance, setSelectedInsurance] = useState("Casco");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/insuranceDetails`)
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
      setSelectedInsurance(event.target.innerText);
    }
  };

  return (
    <section className="form-container">
      <InsuranceSelector changeInsurance={changeInsurance} />
      <div className="form-container__form">
        <InsuranceTypes selectedInsurance={selectedInsurance} />
        <InsuranceDetails first={first} second={second} />
      </div>
    </section>
  );
};

export default InsuranceForm;
