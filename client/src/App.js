import React from "react";
import "./App.css";
import WhatIdo from "./components/WhatIdo";
import Menu from './components/Menu'
import Projects from './components/Projects'

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
        <Projects />
      </div>
    </div>
  );
}

export default App;
