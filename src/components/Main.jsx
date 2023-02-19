import InsuranceForm from "./insurance/InsuranceForm";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <section style={{ display: "flex", gap: "11vw" }}>
      <Sidebar />
      <InsuranceForm />
    </section>
  );
};

export default Main;
