import About from "./components/About";
import Chef from "./components/Chef";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Chef />
    </div>
  );
}

export default App;
