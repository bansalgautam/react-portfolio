import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Projects">Parallax</section>
      <section>Project 1</section>
      <section>Project 2</section>
      <section>Project 3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
