import "../../styles/components/Utils.scss";

const Checkbox = ({ label }) => {
  return (
    <label className="checkbox">
      <input className="checkbox__input" type="radio" name="teritoriu"></input>
      <div className="checkbox__box"></div>
      <p>{label}</p>
    </label>
  );
};

export default Checkbox;
