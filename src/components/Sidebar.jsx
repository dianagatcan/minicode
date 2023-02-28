import { useState } from "react";
import "../styles/components/Sidebar.scss";
import Media from "./utils/Media";

const Sidebar = () => {
  const [lang, setLang] = useState("Рус");

  const changeLang = (lang) => {
    if (lang === "Рус") {
      setLang("Рус");
    }
    if (lang === "Eng") {
      setLang("Eng");
    }
  };
  return (
    <section className="sidebar">
      <div className="sidebar__item">
        <Media name="lang" />
        <div className="sidebar__lang">
          <p
            className={`${lang == "Рус" ? "selected" : ""}`}
            onClick={() => changeLang("Рус")}
          >
            Рус
          </p>
          <hr></hr>
          <p
            className={`${lang == "Eng" ? "selected" : ""}`}
            onClick={() => changeLang("Eng")}
          >
            Eng
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="sidebar__item">
        <Media name="phone" />
        <p>Sună</p>
      </div>
      <hr></hr>
      <div className="sidebar__item">
        <Media name="messenger" />
        <p>Messenger</p>
      </div>
      <hr className="last"></hr>
      <div className="sidebar__item">
        <Media name="whatsapp" />
        <p>Whatsapp</p>
      </div>
    </section>
  );
};

export default Sidebar;
