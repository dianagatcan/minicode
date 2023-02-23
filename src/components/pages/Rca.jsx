import { useEffect, useState } from "react";
import CardDisplay from "../utils/CardDisplay";

const Rca = () => {
  const [types, setTypes] = useState([]);

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

  return <CardDisplay types={types} />;
};
export default Rca;
