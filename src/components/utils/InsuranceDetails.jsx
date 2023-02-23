import { useState } from "react";
import "../../styles/components/InsuranceDetails.scss";
import Media from "./Media";

const InsuranceDetails = () => {
  const [showDetails, setShowDetails] = useState(false);

  const changeMedia = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="insurance_details">
      <details>
        <summary onClick={() => changeMedia()}>
          <p> Obiectul asigurării</p>
          {showDetails ? (
            <Media cn="summary_close" name="plus" />
          ) : (
            <Media cn="summary_close" name="close-details" />
          )}
        </summary>
        <div className="summary_details">
          <hr></hr>
          <p>
            Autovehicule înmatriculate în Republica Moldova, care aparţin
            persoanelor fizice şi juridice. Echipamentul suplimentar, care nu
            intră în dotarea autovehiculului conform listei de dotări ale uzinei
            producătoare. Conducătorul auto şi pasagerii, pentru cazuri de
            accidente care pot avea loc în timpul accidentelor rutiere.
          </p>
        </div>
      </details>
      <details>
        <summary onClick={() => changeMedia()}>
          <p>Riscuri și obligațiuni</p>
          {showDetails ? (
            <Media cn="summary_close" name="plus" />
          ) : (
            <Media cn="summary_close" name="close-details" />
          )}
        </summary>
        <div className="summary_details">
          <hr></hr>
          <p>
            Autovehicule înmatriculate în Republica Moldova, care aparţin
            persoanelor fizice şi juridice. Echipamentul suplimentar, care nu
            intră în dotarea autovehiculului conform listei de dotări ale uzinei
            producătoare. Conducătorul auto şi pasagerii, pentru cazuri de
            accidente care pot avea loc în timpul accidentelor rutiere.
          </p>
        </div>
      </details>
    </div>
  );
};

export default InsuranceDetails;
