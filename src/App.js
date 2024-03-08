import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Navbar from "./Layout/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Hero2 from "./components/Hero2/Hero2";
import Hero3 from "./components/Hero3/Hero3";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Footer />
    </div>
  );
}

export default App;
