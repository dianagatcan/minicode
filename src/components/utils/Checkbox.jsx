import "../../styles/components/Utils.scss";

const Checkbox = ({ label, group }) => {
  return (
    <label className="checkbox">
      <input className="checkbox__input" type="radio" name={group}></input>
      <div className="checkbox__box"></div>
      <p>{label}</p>
    </label>
  );
};

export default Checkbox;
