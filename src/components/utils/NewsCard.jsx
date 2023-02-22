import Media from "./Media";
import "../../styles/components/NewsCard.scss";

const NewsCard = ({ name, path, description, title }) => {
  return (
    <div className="news">
      <img className="news__foto" src={path} alt={name} />
      <div className="news__body">
        <h3>{title}</h3>
        <p>{`${description.slice(0, 48)}...`}</p>
        <button>
          Vezi mai mult
          <Media name="arrow-right-b" />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
