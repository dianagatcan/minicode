import { useEffect, useState } from "react";
import CardDisplay from "../utils/CardDisplay";
import "../../styles/components/pages/Casco.scss";
import CostCard from "../utils/CostCard";
import Checkbox from "../utils/Checkbox";
import RadioCheck from "../utils/RadioCheck";
import Input from "../utils/Input";

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
            <Input label="Marca" type="text" placeholder="Introduceți marca" />
            <Input label="Model" type="text" placeholder="Introduceți model" />
            <div className="step2_container__year">
              <label>Anul producerii</label>
              <div className="radio_group">
                {Array.from({ length: 12 }, (_, i) => 2010 + i).map(
                  (year, index) => (
                    <RadioCheck index={index} unit={year} />
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
            <Input
              label="Valoarea de piață ( € )"
              type="number"
              placeholder="0"
            />
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
