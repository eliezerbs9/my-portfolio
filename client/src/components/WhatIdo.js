import React from 'react'
import ResponsiveIcon from '../assets/images/Responsive_Icon.png'
import DevelopmentIdea from '../assets/images/Development_Idea.png'


const WhatIdo = () => {
    return(
        <>
            <section className="whatIdo">
                <h1 className="portifolio__section__header">What I do</h1>
                <div className="whatIdo__box">
                    <img src={ResponsiveIcon} alt="Responsive Icon" className="whatIdo__box__image"/>
                    <div className="whatIdo__box__body">
                        <h3>Web development</h3>
                        <p className="whatIdo__box__body__text">
                        I create beautiful modern and responsive websites. I specialize in front-end development and user experience using modern tools in the build process.
                        </p>
                    </div>
                </div>
                <div className="whatIdo__box">
                    <img src={DevelopmentIdea} alt="Development Idea" className="whatIdo__box__image"/>
                    <div className="whatIdo__box__body">
                        <h3>Skills</h3>
                        <ul className="whatIdo__box__body__list">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>NodeJS</li>
                            <li>PhotoShop</li>
                            <li>AdobeXD</li>
                            <li>UI/UX Design</li>
                        </ul>
                        <div style={{clear:"both"}}></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatIdo