import InsuranceSelector from "./InsuranceSelector";

import "../../styles/components/InsuranceForm.scss";
import ProgressBar from "./ProgressBar";
import InsuranceTypes from "../utils/InsuranceType";

const InsuranceForm = () => {
  return (
    <section className="container">
      <div className="main">
        <InsuranceSelector />
        <InsuranceTypes />
      </div>
      <ProgressBar />
    </section>
  );
};

export default InsuranceForm;
