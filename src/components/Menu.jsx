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
          <Media cn="pointer" onClick={onClick} name="close" />
          <h1>Meniu</h1>
        </div>
        <ul className="menu__options">
          <li>
            <Media name="home" />
            <span>Pagina Principală</span>
          </li>
          <li>
            <Media name="user" />
            <span>Despre Minicode</span>
          </li>
          <li>
            <Media name="check-circle" />
            <span>Produse de asigurare</span>
          </li>
          <li>
            <Media name="car-asig" />
            <span>Caz asigurat</span>
          </li>
          <li>
            <Media name="file" cn="cariera" />
            <span>Carieră</span>
          </li>
          <li>
            <Media name="star" />
            <span>Oferte</span>
          </li>
          <li>
            <Media name="support" />
            <span>Noutăți</span>
          </li>
          <li>
            <Media name="question" />
            <span>Întrebări</span>
          </li>
          <li>
            <Media name="phone-m" />
            <span>Contacte</span>
          </li>
        </ul>
        <div class="flex"></div>
        <div className="menu__lang">
          <Media name="lang" />
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
              <Media name="phone-m" />+ 373 69 845 845
            </li>
            <li>
              <Media name="mail" /> office@minicode.md
            </li>
            <li>
              <Media name="home" /> mun. Chișinău, str București, 101
            </li>
            <li>
              <Media name="placeholder" /> Harta
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
export default Menu;
