import { useEffect, useState } from "react";
import CardDisplay from "../utils/CardDisplay";
import Checkbox from "../utils/Checkbox";
import Input from "../utils/Input";
import "../../styles/components/pages/Rca.scss";

const Rca = ({ step }) => {
  const [types, setTypes] = useState([]);
  const [checked, setChecked] = useState(0);

  const showStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="rca_step0">
            <h1>Alege tipul autovehiculului</h1>
            <div className="rca_step0__checkbox">
              <label>Autovehiculul este înmatriculat în:</label>
              <Checkbox label="Republica Moldova" group="country" />
            </div>
            <div className="rca_step0__checkbox">
              <label>Posesorul autovehiculului este persoană:</label>
              <div>
                <Checkbox label="Fizică" group="person" />
                <Checkbox label="Juridică" group="person" />
              </div>
            </div>
            <div className="alo">
              <label>Domiciliul persoanei asigurate</label>
              <div class="select" tabindex="1">
                <input name="test" type="radio" id="opt1" checked />
                <label for="opt1" class="option">
                  Alte localitati
                </label>
                <input class="selectopt" name="test" type="radio" id="opt2" />
                <label for="opt2" class="option">
                  Chisinau, Hincesti, Orhei, Straseni, Ialoveni, Anenii Noi,
                  Criuleni
                </label>
                <input class="selectopt" name="test" type="radio" id="opt2" />
                <label for="opt2" class="option">
                  Chisinau
                </label>
              </div>
            </div>
          </div>
        );
      case 1:
        return <CardDisplay types={types} />;
      default:
        return <div>Not yet implemented 😅</div>;
    }
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/vehicles`)
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
