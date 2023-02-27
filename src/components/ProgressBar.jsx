import { useEffect, useState } from "react";
import "../styles/components/ProgressBar.scss";
import Media from "./utils/Media";

const ProgressBar = ({ step, insuranceSteps, selectedInsurance }) => {
  const [circles, setCircles] = useState(0);

  useEffect(() => {
    const nrOfCircles = insuranceSteps.find(
      ({ insuranceType }) => insuranceType === selectedInsurance
    );
    if (nrOfCircles) {
      setCircles(nrOfCircles.steps);
    }
  }, [selectedInsurance]);

  return (
    <section className="bar">
      {circles &&
        Array.from({ length: circles }).map((_, i) => (
          <>
            <div
              data={i}
              className={`circle ${i === step ? "circle__current" : ""} ${
                i < step ? "circle__previous" : ""
              }`}
            >
              {i < step ? <Media name="previous" /> : ""}
              {i === step ? <div className="circle__small"></div> : null}
              {i > step ? i : ""}
            </div>
            <hr className={`${i < step ? "previous_line" : ""}`}></hr>
          </>
        ))}
    </section>
  );
};

export default ProgressBar;
