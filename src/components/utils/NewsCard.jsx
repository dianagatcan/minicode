import { ReactSVG } from "react-svg";
import "../../styles/components/NewsCard.scss";
import { useEffect, useState } from "react";

const NewsCard = ({ name, path, description, title }) => {
  const [arrow, setArrow] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/icons`)
      .then((response) => response.json())
      .then((data) => {
        const arr = data.find((icon) => icon.name === "arrow");
        setArrow(arr);
      });
  }, []);

  return (
    <div className="news">
      <img className="news__foto" src={path} alt={name} />
      <div className="news__body">
        <h3>{title}</h3>
        <p>{`${description.slice(0, 48)}...`}</p>
        <button>
          Vezi mai mult
          <ReactSVG src={arrow.path} wrapper="div" />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
