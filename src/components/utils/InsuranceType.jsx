import { useEffect, useState } from "react";
import InsuranceCard from "./InsuranceCard";

import "../../styles/components/InsuranceCard.scss";

const InsuranceTypes = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3001/vehicles`)
      .then((response) => response.json())
      .then((data) => {
        setTypes(data);
      });
  }, []);

  return (
    <div>
      <h1>Alege tipul autovehicului</h1>
      <div className="insurance_types">
        {types.map((t) => (
          <InsuranceCard {...t} />
        ))}
      </div>
      <div>
        <button>Înapoi</button>
        <button>Înainte</button>
      </div>
    </div>
  );
};

export default InsuranceTypes;
