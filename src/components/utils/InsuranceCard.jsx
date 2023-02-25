import "../../styles/components/InsuranceCard.scss";
import { ReactSVG } from "react-svg";

const InsuranceCard = ({ name, path, description, CVdescription }) => {
  return (
    <label className="card">
      <input name="vehicles" type="radio" />
      <ReactSVG src={path} wrapper="div" />
      <p>{CVdescription ? CVdescription : description}</p>
    </label>
  );
};

export default InsuranceCard;
