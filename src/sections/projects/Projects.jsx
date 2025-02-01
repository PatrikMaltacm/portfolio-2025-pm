import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>
      <div className="project-grid">
      <div className="project">
          <h3>Pixel Home</h3>
          <p>Fiz essa plataforma de divulgação de pixelarts para melhorar
            todas as habilidades que tenho em fullstack, fiz a API de coleta de imagens enviadas
            pelo usuário, armazenagem dessas imagens no servidor e exposição das mesmas
            na página de exibição feita com HTML, CSS e JAVASCRIPT.</p>

            <p>
              Tecnologias utilizadas: <br/>
              Backend: NodeJs com express, multer, tensorflow/tfjs, canvas, ejs, nsfwjs, sharp. <br/>
              Frontend: HTML, CSS e JAVASCRIPT.
          </p>

            <div className="link-container">
                <a href="https://pixellhome.space/home" target="_blank">Veja o projeto</a>
            </div>
        </div>
        <div className="project">
          <h3>BgGone</h3>
          <p>Uma aplicação web para remover fundo de imagens. Nesse projeto eu usei React no frontend fazendo 
            requisições para minha API de remover fundo de imagens.
          </p>

          <p>
              Tecnologias utilizadas: <br/>
              Frontend: React, CSS e JAVASCRIPT.
          </p>

            <div className="link-container">
                <a href="https://bggoneapp.netlify.app/" target="_blank">Veja o projeto</a>
                <a href="https://github.com/PatrikMaltacm/BgGone" target="_blank">Projeto no GitHub</a>
            </div>
        </div>
        <div className="project">
          <h3>BgGoneAPI</h3>
          <p>API responsável por remover o fundo das imangens do site GbGone. Feita a partir do multer 
            (middleware  reponsável por capturar as imagens enviadas pelo usuario), da biblioteca background-removal-node 
            para remover o fundo e express para criar a API.
          </p>
          <p>
              Tecnologias utilizadas: <br/>
              Backend: NodeJs com express, multer e background-removal. <br/>
          </p>

            <div className="link-container">
                <a href="https://github.com/PatrikMaltacm/BgGoneAPI/tree/main" target="_blank">Projeto no GitHub</a>
            </div>
        </div>
        <div className="project">
          <h3>Projeto de login e registro</h3>
          <p>
              Nesse projeto busquei aprender mais sobre CRUD, mas quis adicionar nesse projeto em expecifico apenas o sistema de
              registro e login de usuários.<br/>

          </p>
          <p>
              Tecnologias utilizadas: <br/>
              Backend: NodeJs com express e mysql2. <br/>
              Banco de dados: MySQL hospedado na host Railway.<br/>
              Frontend: HTML, CSS
          </p>
            <div className="link-container">
                <a href="https://loginregister-page.netlify.app/" target="_blank">Veja o projeto</a>
                <a href="https://github.com/PatrikMaltacm/db-consult-api" target="_blank">Projeto no GitHub</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;