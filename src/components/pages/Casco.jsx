import { useEffect, useState } from "react";
import CardDisplay from "../utils/CardDisplay";
import "../../styles/components/pages/Casco.scss";

const Casco = ({ step }) => {
  const [types, setTypes] = useState([]);
  const [checked, setChecked] = useState(undefined);

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
                      <input
                        // checked={index === checked}
                        onClick={() => {
                          setChecked(index);
                        }}
                        name="year"
                        type="radio"
                      ></input>
                      <hr className={checked === index ? "checked" : ""}></hr>
                      <label className={checked === index ? "checked" : ""}>
                        {year}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return <div>step3</div>;
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
