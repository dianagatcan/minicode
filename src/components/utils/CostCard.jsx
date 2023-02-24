import Media from "../utils/Media.jsx";
import "../../styles/components/Cost.scss";

const CostCard = ({ price }) => {
  return (
    <div className="cost">
      <div className="cost__total">
        <h1>{price}</h1>
        <p>$</p>
      </div>
      <span>+</span>
      <Media cn="cost__icon" name="delivery" />
      <p>Livrare gratuită</p>
    </div>
  );
};

export default CostCard;
