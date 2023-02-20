
import Media from "../utils/Media";
import "../../styles/components/InsuranceSelector.scss";

const InsuranceSelector = () => {
  const insuranceTypes = [
    "Carte verde",
    "RCA",
    "Casco",
    "Medicală",
    "Accidente",
    "Bunuri",
    "Locuințe (imobile)",
  ];

  return (
    <div className="selector_container">
      <h1>Alege tipul de asigurare</h1>
      <div className="button_container">
        {insuranceTypes.map((insurance) => (
          <button className="insurance_button">{insurance}</button>
        ))}
        <button className="button">
          Altele
          <Media name="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default InsuranceSelector;
