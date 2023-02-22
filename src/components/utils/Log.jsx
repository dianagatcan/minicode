import "../../styles/components/Log.scss";
import Media from "./Media";

const Log = () => {
  return (
    <div className="close">
      <div className="log">
        <div className="log__header">
          <h1 className="title">Înregistrează-te</h1>
          <Media name="close-log" />
        </div>
        <p className="log__subtitle">
          Deja ai un cont? <span>Loghează-te</span>
        </p>
        <form>
          <div className="log__data">
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Parola"></input>
            <input type="password" placeholder="Confirmă parola"></input>
          </div>
          <label>
            <input type="checkbox"></input>
            <p>
              Sunt de acord cu
              <span className="gradient"> Termenii și condițiile</span>{" "}
              site-ului
            </p>
          </label>
          <button type="submit">Înregistrare</button>
        </form>
      </div>
    </div>
  );
};
export default Log;
