import "../../styles/components/InsuranceCard.scss";

const InsuranceCard = ({ name, path, description }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={path} alt={name} />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default InsuranceCard;
