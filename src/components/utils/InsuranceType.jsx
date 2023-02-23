import Rca from "../pages/Rca";
import CarteVerde from "../pages/CarteVerde";
import Casco from "../pages/Casco";
import "../../styles/components/InsuranceCard.scss";

const InsuranceTypes = ({ selectedInsurance }) => {
  const decideRender = () => {
    switch (selectedInsurance) {
      case "Casco":
        return <Casco />;
      case "Carte verde":
        return <CarteVerde />;
      case "RCA":
        return <Rca />;
      default:
        break;
    }
  };

  return <div className="left-insurance">{decideRender()}</div>;
};

export default InsuranceTypes;
