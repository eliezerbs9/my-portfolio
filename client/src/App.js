import React from "react";
import "./App.css";
import WhatIdo from "./components/WhatIdo";
import Menu from './components/Menu'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="portifolio">
      <div className="portifolio__menu">
          <Menu />
      </div>
      <div className="portifolio__body">
        <AboutMe />
        <WhatIdo />
        <Projects />
      </div>
    </div>
  );
}

export default App;
