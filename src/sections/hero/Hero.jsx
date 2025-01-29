import React from 'react';
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Patrik Malta</h1>
        <p>Desenvolvedor Fullstack | React | Node.js</p>
        <button>
          <Link to="about" smooth={true} duration={500}>Me conheça melhor</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;