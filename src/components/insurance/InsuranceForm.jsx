import InsuranceSelector from "./InsuranceSelector";

import "../../styles/components/InsuranceForm.scss";
import ProgressBar from "./ProgressBar";

const InsuranceForm = () => {
  return (
    <section className="container">
      <div className="main">
        <InsuranceSelector />
        {/* <VehicleSelector />
            <InsuranceDetails /> */}
      </div>
      <ProgressBar />
    </section>
  );
};

export default InsuranceForm;
