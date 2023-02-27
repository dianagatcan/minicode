import "../../styles/components/ReviewCard.scss";
import Media from "./Media";

const ReviewCard = ({ foto, name, stars, comment }) => {
  return (
    foto && (
      <div className="review">
        <div className="review__foto">
          <img src={foto} alt="alo"></img>
        </div>
        <div className="review__content">
          <p className="review__name"> {name}</p>

          <div className="review__stars">
            {Array.from({ length: stars }).map((star) => (
              <Media name="star-filled" />
            ))}
            {Array.from({ length: 5 - stars }).map((star) => (
              <Media name="star-empty" />
            ))}
          </div>
          <div className="review__comment">
            <p>{comment}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default ReviewCard;
