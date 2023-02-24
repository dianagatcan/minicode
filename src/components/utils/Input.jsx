import "../../styles/components/Utils.scss";

const Input = ({ label, type, placeholder }) => {
  return (
    <div className="input_div">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
