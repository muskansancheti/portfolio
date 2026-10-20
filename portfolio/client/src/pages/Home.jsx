import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Education/>
        <Certifications/>
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;