import { useState } from "react";
import "../styles/components/Menu.scss";
import Media from "./utils/Media";

const Menu = ({ onClick }) => {
  const [lang, setLang] = useState("Ro");

  const changeLang = (lang) => {
    if (lang === "Рус") {
      setLang("Рус");
    }
    if (lang === "Ro") {
      setLang("Ro");
    }
  };

  return (
    <aside>
      <div className="menu">
        <div className="menu__header">
          <Media group="icons" cn="pointer" onClick={onClick} name="close" />
          <h1>Meniu</h1>
        </div>
        <ul className="menu__options">
          <li>
            <Media group="icons" name="home" />
            Pagina Principală
          </li>
          <li>
            <Media group="icons" name="user" />
            Despre Minicode
          </li>
          <li>
            <Media group="icons" name="check-circle" />
            Produse de asigurare
          </li>
          <li>
            <Media group="icons" name="car-asig" />
            Caz asigurat
          </li>
          <li>
            <Media group="icons" name="file" />
            Carieră
          </li>
          <li>
            <Media group="icons" name="star" />
            Oferte
          </li>
          <li>
            <Media group="icons" name="support" />
            Noutăți
          </li>
          <li>
            <Media group="icons" name="question" />
            Întrebări
          </li>
          <li>
            <Media group="icons" name="phone-m" />
            Contacte
          </li>
        </ul>
        <div class="flex"></div>
        <div className="menu__lang">
          <Media group="icons" name="lang" />
          <p
            className={`${lang == "Рус" ? "selected" : ""}`}
            onClick={() => changeLang("Рус")}
          >
            Рус
          </p>
          <hr></hr>
          <p
            className={`${lang == "Ro" ? "selected" : ""}`}
            onClick={() => changeLang("Ro")}
          >
            Ro
          </p>
        </div>
        <div>
          <ul className="menu__footer">
            <li>
              <Media group="icons" name="phone-m" />+ 373 69 845 845
            </li>
            <li>
              <Media group="icons" name="mail" /> office@minicode.md
            </li>
            <li>
              <Media group="icons" name="home" /> mun. Chișinău, str București,
              101
            </li>
            <li>
              <Media group="icons" name="placeholder" /> Harta
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
export default Menu;
