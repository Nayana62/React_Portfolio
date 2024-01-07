import { Element } from "react-scroll";
import "./App.css";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
