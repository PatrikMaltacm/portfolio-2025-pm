import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>
      <div className="project-grid">
      <div className="project">
          <h3>Pixel Home</h3>
          <p>Estou fazendo ele para melhorar
            todas as habilidades que tenho em fullstack, fiz a API de coleta de imagens enviadas
            pelo usuário, armazenagem dessas imagens no servidor e exposição das mesmas
            na página de exibição feita com HTML, CSS e JAVASCRIPT.</p>
            <div className="link-container">
                <a href="https://pixellhome.space/home">Veja o projeto</a>
            </div>
        </div>
        <div className="project">
          <h3>BgGone</h3>
          <p>Uma aplicação web para remover fundo de imagens. Nesse projeto eu usei React no frontend fazendo requisições para minha API de remover fundo de imagens.</p>
            <div className="link-container">
                <a href="https://bggoneapp.netlify.app/">Veja o projeto</a>
            </div>
        </div>
        <div className="project">
          <h3>BgGoneAPI</h3>
          <p>API responsável por remover o fundo das imangens do site GbGone. Feita a partir do multer (middleware  reponsável por capturar as imagens enviadas pelo usuario), da biblioteca background-removal-node para remover o fundo e express para criar a API.</p>
            <div className="link-container">
                <a href="https://github.com/PatrikMaltacm/BgGoneAPI/tree/main">Veja o projeto</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;