import { useEffect, useState } from "react";
import CardDisplay from "../utils/CardDisplay";

const Rca = ({ step }) => {
  const [types, setTypes] = useState([]);

  const showStep = () => {
    switch (step) {
      case 0:
        return <div>Alo</div>;
      case 1:
        return <CardDisplay types={types} />;
      default:
        return <div>Not yet implemented 😅</div>;
    }
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/vehicles`)
      .then((response) => response.json())
      .then((data) => {
        const RcaData = data.filter((vehicle) =>
          vehicle.groups.includes("RCA")
        );
        setTypes(RcaData);
      });
  }, []);

  return showStep();
};
export default Rca;
