import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Patrik Malta</h1>
        <p>Desenvolvedor Fullstack | React | Node.js</p>
        <a href="https://github.com/PatrikMaltacm" target='blank'>
        <img src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" alt="github-logo"  width={80}/>
        </a><a href="https://linkedin.com/in/patrik-malta-1160552b6" target='blank'>
        <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="linkedin-logo" width={80}/>
        </a>
      </div>
    </section>
  );
};

export default Hero;