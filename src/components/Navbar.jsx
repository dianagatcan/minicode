import { useState } from "react";
import "../styles/components/Navbar.scss";
import Menu from "./Menu";
import Media from "./utils/Media";
import Log from "./utils/Log";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLog, setShowLog] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleLog = () => {
    setShowLog(!showLog);
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
        <div className="nav__icon" onClick={toggleLog}>
          {showLog ? <Log onClick={toggleMenu} /> : null}
          <Media name="users" />
          <p>Logare</p>
        </div>
        <div className="nav__icon">
          <Media name="file-reg" />
          <p>Înregistrare</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
