import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Social />
    </div>
  );
}

export default App;
