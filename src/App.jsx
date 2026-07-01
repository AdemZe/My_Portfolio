import "./App.css";
import Navbar from "./sections/Navbar/Navbar";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/contact/Contact";
import Projects from "./sections/projets/Projects";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;