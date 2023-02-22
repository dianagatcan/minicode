import "../../styles/components/InsuranceCard.scss";
import InsuranceCard from "./InsuranceCard";

const CardDisplay = ({ types }) => {
  return (
    <div>
      <h1>Alege tipul autovehicului</h1>
      <div className="insurance_types">
        {types.map((t, index) => (
          <InsuranceCard key={index} {...t} />
        ))}
      </div>
    </div>
  );
};
export default CardDisplay;
