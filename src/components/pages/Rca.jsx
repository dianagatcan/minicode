import { useEffect, useState } from "react";
import CardDisplay from "../utils/CardDisplay";
import Checkbox from "../utils/Checkbox";
import "../../styles/components/pages/Rca.scss";
import CustomDropdown from "../utils/CustomDropdown";
import CostCard from "../utils/CostCard";

const Rca = ({ step }) => {
  const [types, setTypes] = useState([]);

  const showStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="rca_step">
            <h1 className="title_insurance">Alege tipul autovehicului</h1>
            <div className="rca_step__checkbox">
              <label>Autovehiculul este înmatriculat în:</label>
              <Checkbox label="Republica Moldova" group="country" />
            </div>
            <div className="rca_step__checkbox">
              <label>Posesorul autovehicului este persoană:</label>
              <div>
                <Checkbox label="Fizică" group="person" />
                <Checkbox label="Juridică" group="person" />
              </div>
            </div>
            <CustomDropdown
              label="Domiciliul persoanei asigurate"
              placeholder="Selectează o opțiune"
              options={[
                "Alte localități",
                "Chișinău, Orhei, Hâncești, Strășeni, Ialoveni, Criuleni",
              ]}
            />
          </div>
        );
      case 1:
        return <CardDisplay types={types} />;
      case 2:
        return (
          <div className="rca_step">
            <h1 className="title_insurance">Numărul de locuri</h1>
            <CustomDropdown
              label="Numărul de locuri"
              placeholder="Selectează o opțiune"
              options={[
                "Până la 17 locuri, inclusiv al conducătorului",
                "De la 18 până la 30 locuri, inclusiv al conducătorului",
                "Cu peste 30 locuri",
                "Troleibuze",
              ]}
            />
            <CustomDropdown
              label="Numărul de persoane admise la conducere"
              placeholder="Selectează o opțiune"
              options={["Limitat", "Nelimitat"]}
            />
            <CustomDropdown
              label="Stagiul de conducere al posesorului"
              placeholder="Selectează o opțiune"
              options={["Până la un an", "Mai mult de un an"]}
            />
          </div>
        );
      case 3:
      case 4:
        return (
          <div className="rca_step">
            <h1 className="title_insurance">Detalii posesor</h1>
            <div className="rca_step__checkbox">
              <label>Sunteți pensionar sau aveți grad de invalidate?</label>
              <div>
                <Checkbox label="DA" group="detail1" />
                <Checkbox label="NU" group="detail1" />
              </div>
            </div>
            <div className="rca_step__checkbox">
              <label>Ați mai încheiat contract de asigurare RCA? </label>
              <div>
                <Checkbox label="DA" group="detail2" />
                <Checkbox label="NU" group="detail2" />
              </div>
            </div>
            <div className="rca_step__checkbox">
              <label>Asigurare pentru remorci</label>
              <div>
                <Checkbox label="DA" group="detail3" />
                <Checkbox label="NU" group="detail3" />
              </div>
            </div>
            {step === 4 ? <CostCard price="153" /> : null}
          </div>
        );
      default:
        return <div>Not yet implemented 😅</div>;
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3001/vehicles`)
      .then((response) => response.json())
      .then((data) => {
        const RcaData = data.filter((vehicle) =>
          vehicle.groups.includes("RCA")
        );
        setTypes(RcaData);
      });
  }, []);

  return showStep();
};
export default Rca;
