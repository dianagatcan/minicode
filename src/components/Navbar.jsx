import { useState } from "react";
import "../styles/components/Navbar.scss";
import Media from "./utils/Media";

const Navbar = () => {
  const [showLog, setShowLog] = useState(false);

  const toggleLog = (event) => {
    setShowLog(true);
  };

  return (
    <nav className="nav">
      <div className="menu_logo">
        <Media name="menu1" />
        <Media name="Logo" cn="nav__logo" />
      </div>
      <div className="middle">
        <hr></hr>
        <h1>Cu siguranță, împreună!</h1>
        <hr></hr>
      </div>
      <div className="nav__reg">
        <div className="nav__icon" onClick={toggleLog}>
          <Media name="users" />
          <p>Logare</p>
          {showLog ? (
            <div>
              <h1>Hello</h1>
            </div>
          ) : null}
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
