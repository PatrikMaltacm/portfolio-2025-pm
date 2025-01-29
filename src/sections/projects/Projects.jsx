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
            na página de exibição.</p>
            <div className="link-container">
                <a href="https://pixellhome.space/home">Veja o projeto</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;