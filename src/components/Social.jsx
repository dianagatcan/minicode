import { useEffect, useRef, useState } from "react";
import "../styles/components/Social.scss";
import Media from "./utils/Media";
import News from "./utils/News";

const Social = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const maskPhoneValue = (value) => {
    const prefix = "+373 ";
    if (value.length < prefix.length && value.length !== 1) {
      setPhoneValue(prefix);
    } else {
      if (value.includes(prefix)) {
        setPhoneValue(value);
      } else {
        setPhoneValue(`${prefix}${value}`);
      }
    }
  };

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
                onChange={(e) => maskPhoneValue(e.target.value)}
                type="tel"
                maxLength="13"
                placeholder="+373 __-___-___"
                value={phoneValue}
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
          <News />
        </div>
      </div>
      <div className="social__reviews">
        <h2>Recenziile clienților</h2>
      </div>
    </section>
  );
};

export default Social;
