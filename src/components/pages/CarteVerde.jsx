import { useEffect, useState } from "react";
import CardDisplay from "../utils/CardDisplay";
import "../../styles/components/pages/CarteVerde.scss";
import Checkbox from "../utils/Checkbox";
import RadioCheck from "../utils/RadioCheck";
import CostCard from "../utils/CostCard";

const CarteVerde = ({ step }) => {
  const [types, setTypes] = useState([]);
  const validation = [
    "15 Zile",
    "1 Luna",
    "2 Luni",
    "3 Luni",
    "4 Luni",
    "5 Luni",
    "6 Luni",
    "7 Luni",
    "8 Luni",
    "9 Luni",
  ];

  const showStep = () => {
    switch (step) {
      case 0:
        return <CardDisplay types={types} />;
      case 1:
      case 2:
        return (
          <div className="cv_container">
            <h1 className="title_insurance">Zona de deplasare</h1>
            <div className="cv_container__zona">
              <label>Zona de deplasare</label>
              <div className="checkbox-container">
                <Checkbox label="Ucraina, Belarus" group="zona" />
                <Checkbox
                  label="Ucraina, Belarus, Federația Rusă"
                  group="zona"
                />
                <Checkbox
                  label="Țările membre ale sistemului Carte Verde, Europa"
                  group="zona"
                />
              </div>
            </div>
            <div className="cv_container__valid">
              <label>Valabilitatea poliței</label>
              <div className="radio_group">
                {validation.map((period, index) => (
                  <RadioCheck index={index} unit={period} />
                ))}
              </div>
            </div>
            {step === 2 ? <CostCard price="153" /> : null}
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
        const carteVerdeData = data.filter((vehicle) =>
          vehicle.groups.includes("Carte Verde")
        );
        setTypes(carteVerdeData);
      });
  }, []);

  return showStep();
};
export default CarteVerde;
