import { useEffect, useRef } from "react";
import "../styles/components/Social.scss";
import Media from "./utils/Media";
import NewsCard from "./utils/NewsCard";

const Social = () => {
  return (
    <section className="social">
      <div className="social__form">
        <div className="form__details">
          <h2>Ai nevoie de o consultație?</h2>
          <p>
            Lasă numele și numărul tău de telefon, iar noi te vom contacta în
            cel mai scurt timp posibil.
          </p>
        </div>
        <div>
          <form>
            <div className="form__input">
              <input type="text" placeholder="Nume/Prenume" />
              <input
                type="tel"
                pattern="\+373 \d{2}-\d{3}-\d{3}"
                placeholder="+373 __-___-___"
                maxLength="8"
              />
            </div>
            <button type="submit">Trimite</button>
          </form>
        </div>
      </div>
      <div className="social__news">
        <div className="news__header">
          <h2>Oferte</h2>
          <button>
            Vezi toate ofertele
            <Media name="arrow-right-b" />
          </button>
        </div>
        <div className="news__content">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </section>
  );
};

export default Social;
