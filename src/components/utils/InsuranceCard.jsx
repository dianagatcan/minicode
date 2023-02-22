import "../../styles/components/InsuranceCard.scss";

const InsuranceCard = ({ name, path, description, CVdescription }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={path} alt={name} />
      </div>
      <p>{CVdescription ? CVdescription : description}</p>
    </div>
  );
};

export default InsuranceCard;
