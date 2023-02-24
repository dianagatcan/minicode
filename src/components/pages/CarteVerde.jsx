import { useEffect, useState } from "react";
import CardDisplay from "../utils/CardDisplay";
import "../../styles/components/pages/CarteVerde.scss";
import Checkbox from "../utils/Checkbox";

const CarteVerde = ({ step }) => {
  const [types, setTypes] = useState([]);

  const showStep = () => {
    switch (step) {
      case 0:
        return <CardDisplay types={types} />;
      case 1:
      case 2:
        return (
          <div className="cv_container">
            <h1>Zona de deplasare</h1>
            <div className="cv_container__zona">
              <label>Zona de deplasare</label>
              <div className="checkbox-container">
                <Checkbox label="Ucraina, Belarus" />
                <Checkbox label="Ucraina, Belarus, Federația Rusă" />
                <Checkbox label="Țările membre ale sistemului Carte Verde, Europa" />
              </div>
            </div>
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
