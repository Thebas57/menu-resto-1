import About from "./components/About";
import Awards from "./components/Awards";
import Chef from "./components/Chef";
import Home from "./components/Home";
import Instagram from "./components/Instagram";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Chef />
      <Video />
      <Awards />
      <Instagram />
    </div>
  );
}

export default App;
