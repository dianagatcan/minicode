import "../../styles/components/Log.scss";
import Media from "./Media";

const Log = ({ onClick, selectedLog, changeLog }) => {
  return (
    <div className="close">
      <div className="log">
        <div className="log__header">
          <h1 className="title">
            {selectedLog === "Înregistrare"
              ? "Înregistrează-te"
              : "Loghează-te"}
          </h1>
          <Media cn="pointer" onClick={onClick} name="close-log" />
        </div>
        <div className="log__subtitle">
          {selectedLog === "Înregistrare" ? (
            <p className="log__subtitle">
              Deja ai un cont? <span onClick={changeLog}>Loghează-te</span>
            </p>
          ) : (
            <p className="log__subtitle">
              Nu ai cont? <span onClick={changeLog}>Înregistrează-te</span>
            </p>
          )}
        </div>
        <form>
          <div className="log__data">
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Parola"></input>
            {selectedLog === "Înregistrare" ? (
              <input type="password" placeholder="Confirmă parola"></input>
            ) : null}
          </div>

          {selectedLog === "Înregistrare" ? (
            <label>
              <input type="checkbox"></input>
              <p>
                Sunt de acord cu
                <span className="gradient"> Termenii și condițiile</span>{" "}
                site-ului
              </p>
            </label>
          ) : (
            <p className="condition">Ai uitat parola?</p>
          )}

          <button type="submit">
            {selectedLog === "Înregistrare" ? "Înregistrare" : "Logare"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Log;
