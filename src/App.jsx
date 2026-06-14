import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Hackathons from "./components/Hackathons";
import Hobbies from "./components/Hobbies";
import ResumeShowcase from "./components/ResumeShowcase";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Hackathons />
      <Hobbies />
      <ResumeShowcase />
      <Footer/>
      
    </>
  );
}

export default App;