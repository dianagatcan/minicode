import "react-dropdown/style.css";
import "../../styles/components/Utils.scss";
import Dropdown from "react-dropdown";

const CustomDropdown = ({ label, options, placeholder }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <Dropdown
        options={options}
        placeholder={placeholder}
        arrowClosed={<span></span>}
        arrowOpen={<span></span>}
        placeholderClassName={"text"}
        controlClassName={"rounded text"}
        menuClassName={"rounded text"}
      />
    </div>
  );
};

export default CustomDropdown;
