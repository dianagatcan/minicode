import "../../styles/components/InsuranceSelector.scss";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

const InsuranceSelector = ({ changeInsurance }) => {
  const [moved, setMoved] = useState(false);
  const [active, setActive] = useState(2);

  const [arrow, setArrow] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/icons`)
      .then((response) => response.json())
      .then((data) => {
        const arr = data.find((icon) => icon.name === "arrow-forward");
        setArrow(arr);
      });
  }, []);

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
                data={insurance}
                key={index}
                onClick={(event) => {
                  setActive(index);
                  changeInsurance(event);
                }}
                className={`insurance_button ${
                  index === active ? "active" : ""
                } `}
              >
                {index !== active ? insurance : ""}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            executeMove();
          }}
          className="button-others"
        >
          Altele
          {arrow && <ReactSVG src={arrow.path} wrapper="div" />}
        </button>
      </div>
    </div>
  );
};

export default InsuranceSelector;
