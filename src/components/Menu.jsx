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
        <div className="menu__part">
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
        </div>
        <div className="menu__part">
          <div className="menu__lang">
            <Media name="lang" />
            <p
              className={`${lang === "Рус" ? "selected" : ""}`}
              onClick={() => changeLang("Рус")}
            >
              Рус
            </p>
            <hr></hr>
            <p
              className={`${lang === "Ro" ? "selected" : ""}`}
              onClick={() => changeLang("Ro")}
            >
              Ro
            </p>
          </div>
          <div>
            <ul className="menu__footer">
              <li>
                <Media name="phone-m" />
                <a href="tel:+ 373 69 845 845">+ 373 69 845 845</a>
              </li>
              <li>
                <Media name="mail" />
                <a href="mailto:office@minicode.md">office@minicode.md</a>
              </li>
              <li>
                <Media name="home" /> mun. Chișinău, str București, 101
              </li>
              <li>
                <Media name="placeholder" />
                <a
                  href="https://www.google.com/maps/place/Strada+Bucure%C8%99ti+81,+Chi%C8%99in%C4%83u+2012,+Moldova/@47.0214036,28.8259103,17z/data=!3m1!4b1!4m5!3m4!1s0x40c97c32611b57dd:0xfa2eb6169d790204!8m2!3d47.0214!4d28.828099"
                  target="_blank"
                >
                  Harta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Menu;
