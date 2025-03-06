import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
