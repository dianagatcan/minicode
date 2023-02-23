import { useState } from "react";
import "../../styles/components/InsuranceDetails.scss";
import Media from "./Media";

const InsuranceDetails = () => {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);

  const changeMedia = (nr) => {
    if (nr === 1) {
      setShowFirst(!showFirst);
    } else {
      setShowSecond(!showSecond);
    }
  };

  return (
    <div className="insurance_details">
      <details open>
        <summary onClick={() => changeMedia(1)}>
          <p> Obiectul asigurării</p>
          {showFirst ? (
            <Media cn="summary_close" name="close-details" />
          ) : (
            <Media cn="summary_close" name="plus" />
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
        <summary onClick={() => changeMedia(2)}>
          <p>Riscuri și obligațiuni</p>
          {showSecond ? (
            <Media cn="summary_close" name="close-details" />
          ) : (
            <Media cn="summary_close" name="plus" />
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
