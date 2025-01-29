import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <img src="https://drive.google.com/file/d/1mEUS0sFbEiquBVURhPxgK914oak4qsHY/view?usp=sharing" alt="Minha Foto" className="about-img" />
        <p>
          Olá! Meu nome é Patrik, e sou um desenvolvedor fullstack com experiência em tecnologias
          modernas como React, Node.js, MySQL e as tecnologias basicas HTML, CSS E JAVASCRIPT puro, também conheço a sintaxe
          da linguagem C# por desenvolver jogos usando a Unity engine. <br/> Adoro criar soluções 
          criativas, minimalistas e eficientes
          para problemas complexos.
        </p>
        <p>
          Além de programar, sou apaixonado por musica, desenvolvimento de jogos,
          e estou sempre buscando aprender coisas novas.
        </p>
      </div>
    </section>
  );
};

export default About;