import InsuranceForm from "./insurance/InsuranceForm";
import Sidebar from "./Sidebar";
import ProgressBar from "./ProgressBar";
import "../styles/components/Main.scss";

const Main = () => {
  return (
    <section className="main-container">
      <Sidebar />
      <InsuranceForm />
      {/* <ProgressBar /> */}
    </section>
  );
};

export default Main;
