import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <>
      {/* HOME */}
      <section id="home">
        <Home />
      </section>

      {/* ABOUT US */}
      <section id="about">
        <About />
      </section>

      {/* OUR HOBBIES / SKILLS */}
      <section id="skills">
        <Skills />
      </section>

      {/* EVENTS / BLOG */}
      <section id="work">
        <Blog />
      </section>

      {/* JOIN / CONTACT */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;