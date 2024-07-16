// Remove the duplicate import of 'Switch' from react-router-dom


import "./App.css";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/contact/Contact";
import Projects from "./sections/projets/Projects";

function App() {
  return (
    <>
      <Hero />
      <Projects/>
      <Skills />
      <Contact />
      <Footer />
  
      
 

 

    </>
  );
}
export default App;