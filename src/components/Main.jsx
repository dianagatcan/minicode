import InsuranceForm from "./insurance/InsuranceForm";
import Sidebar from "./Sidebar";
import "../styles/components/Main.scss";

const Main = () => {
  return (
    <section className="main-container">
      <Sidebar />
      {/* <InsuranceForm /> */}
    </section>
  );
};

export default Main;
