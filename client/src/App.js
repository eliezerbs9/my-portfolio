import React from "react";
import logo from "./logo.svg";
import whatIdo from "./components/WhatIdo";
import "./App.css";
import WhatIdo from "./components/WhatIdo";
import Menu from './components/Menu'
import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <div className="portifolio">
      <div className="portifolio__menu">
          <Menu />
      </div>
      <div className="portifolio__body">
        <section className="about_me">
          <h1 className="portifolio__section__header">About me</h1>
          <p className="about_me__text">
            I am a design oriented web developer who is passionate about
            learning new technologies and creating beautiful web applications
          </p>
        </section>
        <section className="whatIdo">
          <WhatIdo />
        </section>
        <section className="projects">
          <h1 className="portifolio__section__header">Projects</h1>
          <div className="project_grid">
            <ProjectCard />
            <ProjectCard />

            <ProjectCard />

            <ProjectCard />

          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
