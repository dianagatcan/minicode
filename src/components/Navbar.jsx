import { useState } from "react";
import "../styles/components/Navbar.scss";
import Menu from "./Menu";
import Media from "./utils/Media";
import Log from "./utils/Log";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLog, setSelectedLog] = useState("");

  const showPopup = (event) => {
    if (event.target.dataset.popup) {
      setSelectedLog(event.target.dataset.popup);
    } else if (event.target.parentElement.dataset.popup) {
      setSelectedLog(event.target.parentElement.dataset.popup);
    }
  };

  const clearSelectedLog = () => {
    setSelectedLog("");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <div className="menu_logo">
        <div>
          <Media onClick={toggleMenu} cn="pointer" name="menu1" />
          {showMenu ? <Menu onClick={toggleMenu} /> : null}
        </div>
        <Media name="Logo" cn="nav__logo" />
      </div>
      <div className="middle">
        <hr></hr>
        <h1 className="nav__title">Cu siguranță, împreună!</h1>
        <hr></hr>
      </div>
      <div className="nav__reg">
        {selectedLog ? (
          <Log onClick={clearSelectedLog} selectedLog={selectedLog} />
        ) : null}
        <div
          data-popup="Logare"
          onClick={(event) => showPopup(event)}
          className="nav__icon"
        >
          <Media cn="pointer" name="users" />
          <p className="nav_p">Logare</p>
        </div>
        {selectedLog ? (
          <Log onClick={clearSelectedLog} selectedLog={selectedLog} />
        ) : null}
        <div
          data-popup="Înregistrare"
          onClick={(event) => showPopup(event)}
          className="nav__icon"
        >
          <Media cn="pointer" name="file-reg" />
          <p className="nav_p">Înregistrare</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
