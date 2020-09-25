import React from 'react';
import logo from './logo.svg';
import ResponsiveIcon from './components/icons/ResponsiveIcon'
import DevelopmentIdea from './components/icons/DevelopmentIdea'
import './App.css';

function App() {
  return (
    <div className="portifolio">
      <div className="portifolio__menu">
      </div>
      <div className="portifolio__body">
        <section className="about_me">
          <h1 className="portifolio__section__header">About me</h1>
          <p className="about_me__text">I am a design oriented web developer who is passionate about learning new technologies and creating beautiful web applications</p>
        </section>
        <section className="whatIdo">
          <h1 className="portifolio__section__header">What I do</h1>
          <div className="whatIdo__box">
            <div className="whatIdo__box__icon">
                <ResponsiveIcon/>
            </div>
            <div className="whatIdo__box__body">
              <h2>Web development</h2>
              <p className="whatIdo__box__body__text">
              I create beautiful modern and responsive websites. I specialize in front-end development and user experience using modern tools in the build process.
              </p>
            </div>
          </div>
          <div className="whatIdo__box">
            <div className="whatIdo__box__icon">
              <DevelopmentIdea />
            </div>
            <div className="whatIdo__box__body">
                <h2>Skills</h2>
                <ul className="whatIdo__box__body__list">
                  <li>HTML5/CSS3</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>NodeJS</li>
                  <li>UI/UX Design</li>
                </ul>
            </div>
          </div>
        </section>
        <section className="projects">
          <h1 className="portifolio__section__header">Projects</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
