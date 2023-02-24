import "../../styles/components/Utils.scss";

const RadioCheck = ({ index, unit }) => {
  return (
    <div key={`div${index}`} className="radio_button">
      <input name="year" type="radio"></input>
      <hr></hr>
      <label>{unit}</label>
    </div>
  );
};

export default RadioCheck;
