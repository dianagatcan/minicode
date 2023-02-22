import "../../styles/components/InsuranceCard.scss";
import CarteVerde from "../pages/CarteVerde";
import Casco from "../pages/Casco";

const InsuranceTypes = ({ selectedInsurance }) => {
  const decideRender = () => {
    switch (selectedInsurance) {
      case "Casco":
        return <Casco />;
      case "Carte verde":
        return <CarteVerde />;
      default:
        break;
    }
  };

  return decideRender();
};

export default InsuranceTypes;
