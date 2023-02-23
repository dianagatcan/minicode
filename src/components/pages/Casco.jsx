import { useEffect, useState } from "react";
import CardDisplay from "../utils/CardDisplay";

const Casco = () => {
  const [types, setTypes] = useState([]);

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

  return <CardDisplay types={types} />;
};

export default Casco;
