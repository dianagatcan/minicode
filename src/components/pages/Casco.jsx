import { useEffect, useState } from "react";
import CardDisplay from "../utils/CardDisplay";

const Casco = ({ step }) => {
  const [types, setTypes] = useState([]);

  const showStep = () => {
    switch (step) {
      case 0:
        return <CardDisplay types={types} />;
      case 1:
        return <div>step2</div>;
      case 2:
        return <div>step3</div>;
      default:
        return <div>Not yet implemented 😅</div>;
    }
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/vehicles`)
      .then((response) => response.json())
      .then((data) => {
        const cascoData = data.filter((vehicle) =>
          vehicle.groups.includes("Casco")
        );
        setTypes(cascoData);
      });
  }, []);

  return showStep();
};

export default Casco;
