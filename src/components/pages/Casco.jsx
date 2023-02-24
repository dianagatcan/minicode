import { useEffect, useState } from "react";
import CardDisplay from "../utils/CardDisplay";
import "../../styles/components/pages/Casco.scss";
import CostCard from "../utils/CostCard";
import Checkbox from "../utils/Checkbox";

const Casco = ({ step }) => {
  const [types, setTypes] = useState([]);

  const showStep = () => {
    switch (step) {
      case 0:
        return <CardDisplay types={types} />;
      case 1:
        return (
          <div className="step2_container">
            <h1>Alege marca</h1>
            <div className="step2_container__input">
              <label>Marca</label>
              <input type="text" placeholder="Introduceți marca"></input>
            </div>
            <div className="step2_container__input">
              <label>Model</label>
              <input type="text" placeholder="Introduceți modelul"></input>
            </div>
            <div className="step2_container__year">
              <label>Anul producerii</label>
              <div className="radio_group">
                {Array.from({ length: 12 }, (_, i) => 2010 + i).map(
                  (year, index) => (
                    <div key={`div${index}`} className="radio_button">
                      <input name="year" type="radio"></input>
                      <hr></hr>
                      <label>{year}</label>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        );
      case 2:
      case 3:
        return (
          <div className="step3_container">
            {step === 2 ? (
              <h1>Alege valoarea pe piață</h1>
            ) : (
              <h1>Prețul final</h1>
            )}

            <div className="step3_container__input">
              <label>Valoarea de piață ( € )</label>
              <input type="number" placeholder="0"></input>
            </div>
            <div className="step3_container__teritoriu">
              <label>Teritoriul de acoperire CASCO</label>
              <div className="checkbox-container">
                <Checkbox label="RM" />
                <Checkbox label="RM + CSI" />
                <Checkbox label="RM + CSI + EU + TURCIA" />
              </div>
            </div>
            <div className="step3_container__franciza">
              <label>Franciza</label>
              <div className="checkbox-container">
                <Checkbox label="Cu aplicarea francizei" />
                <Checkbox label="Fara franciza" />
              </div>
            </div>
            {step === 3 ? <CostCard price="153" /> : null}
          </div>
        );
      default:
        return <div>Not yet implemented 😅</div>;
    }
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/vehicles`)
      .then((response) => response.json())
      .then((data) => {
        const cascoData = data.filter((vehicle) =>
          vehicle.groups.includes("Casco")
        );
        setTypes(cascoData);
      });
  }, []);

  return showStep();
};

export default Casco;
