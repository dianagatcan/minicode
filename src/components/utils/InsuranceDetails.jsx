import { useState } from "react";
import "../../styles/components/InsuranceDetails.scss";
import Media from "./Media";

const InsuranceDetails = ({first,second}) => {
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
    <div className="right_insurance">
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
            {first}
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
          {second}
          </p>
        </div>
      </details>
    </div>
  );
};

export default InsuranceDetails;
