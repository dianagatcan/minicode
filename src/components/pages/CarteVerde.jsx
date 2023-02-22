import { useEffect, useState } from "react";
import CardDisplay from "../utils/CardDisplay";

const CarteVerde = () => {
    const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/vehicles`)
      .then((response) => response.json())
      .then((data) => {
        const carteVerdeData = data.filter((vehicle) =>
          vehicle.groups.includes("Carte Verde")
        );
        setTypes(carteVerdeData);
      });
  }, []);

  return (
    <div>
      <CardDisplay types={types}/>
    </div>
  );


}
export default CarteVerde