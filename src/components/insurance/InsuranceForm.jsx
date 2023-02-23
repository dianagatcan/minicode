import InsuranceSelector from "./InsuranceSelector";
import "../../styles/components/InsuranceForm.scss";
import InsuranceTypes from "../utils/InsuranceType";
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
        setFirst(details.first);
        setSecond(details.second);
      });
  }, [selectedInsurance]);

  const changeInsurance = (event) => {
    setSelectedInsurance(event.target.innerText);
  };

  return (
    <section className="form-container">
      <InsuranceSelector changeInsurance={changeInsurance} />
      <div className="form-container__form">
        <InsuranceTypes selectedInsurance={selectedInsurance} />
        <InsuranceDetails first={first} second={second} />
      </div>
      <div className="form-container__buttons">
        <button>Înapoi</button>
        <button>Înainte</button>
      </div>
    </section>
  );
};

export default InsuranceForm;
