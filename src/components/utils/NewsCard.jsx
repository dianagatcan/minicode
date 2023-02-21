import Media from "./Media";
import foto from "./news1.png";
import "../../styles/components/NewsCard.scss";

const NewsCard = () => {
  const description = "Asigură-ți locuința atunci când pleci în vacanță!";
  return (
    <div className="news">
      <Media name="news1" group="news" />
      <div className="news__body">
        <h3>{description}</h3>
        <p>{`${description.slice(0, 48)}...`}</p>
        <button>
          Vezi mai mult
          <Media group="icons" name="arrow-right-b" />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
