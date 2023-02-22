import Media from "../utils/Media";
import "../../styles/components/InsuranceSelector.scss";
import { useState } from "react";

const InsuranceSelector = ({ changeInsurance }) => {
  const [moved, setMoved] = useState(false);

  const insuranceTypes = [
    "Carte verde",
    "RCA",
    "Casco",
    "Medicală",
    "Accidente",
    "Bunuri",
    "Locuințe (imobile)",
  ];

  const executeMove = () => {
    const overflow = document.querySelector(".overflow");
    const eased = document.querySelector(".eased");
    const difference =
      overflow.scrollWidth - overflow.getBoundingClientRect().width;
    console.log(`translateX(-${parseInt(difference).toString()})`);
    if (!moved) {
      eased.style.transform = `translateX(-${parseInt(
        difference
      ).toString()}px)`;
    } else {
      eased.style.transform = "";
    }

    setMoved(!moved);
  };

  return (
    <div className="selector_container">
      <h1>Alege tipul de asigurare</h1>
      <div className="button_container">
        <div className="overflow">
          <div className={`button_container eased`}>
            {insuranceTypes.map((insurance, index) => (
              <button
                key={index}
                onClick={(event) => changeInsurance(event)}
                className="insurance_button"
              >
                {insurance}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            executeMove();
          }}
          className="button"
        >
          Altele
          <Media name="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default InsuranceSelector;
