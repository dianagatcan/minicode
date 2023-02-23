import InsuranceCard from "./InsuranceCard";
import "../../styles/components/InsuranceCard.scss";

const CardDisplay = ({ types }) => {
  return (
    <div>
      <h1 className="name_container">Alege tipul autovehicului</h1>
      <div className="insurance_types">
        {types.map((t, index) => (
          <InsuranceCard key={index} {...t} />
        ))}
      </div>
    </div>
  );
};
export default CardDisplay;
