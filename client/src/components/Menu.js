import React from 'react'
import GithubIcon from './icons/GithubIcon'
import InstagranIcon from './icons/InstagranIcon'
import EmailIcon from './icons/EmailIcon'

const Menu = () => {

    const toggle = () => {
        var burger = document.querySelector('.burger')
        var menu__social = document.querySelector('.menu__social_media')
        menu__social.classList.toggle('menu__social_media--active')
        burger.classList.toggle('toggle')
        var links = document.querySelectorAll(".menu__social_media li");
        links.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });
    }


    return(
        <div className="menu">
            <img src="https://media.japanpowered.com/images/goku.png" alt="My image" className="menu__image"/>
            <div className="menu__info">
                <p className="menu__info__name">Eliezer Barbosa</p>
                <p className="menu__info__text">Web Developer</p>
                <p className="menu__info__text">San Rafael - California</p>
            </div>

            <ul className="menu__social_media">
                <li>
                    <a href=""><span><GithubIcon/></span></a>
                </li>
                <li>
                    <a href=""><span><InstagranIcon /></span></a>
                </li>
                <li>
                    <a href=""><span><EmailIcon /></span></a>
                </li>
            </ul>

            <div className="burger" onClick={toggle}>
                <div className="burger-l1"></div>
                <div className="burger-l2"></div>
                <div className="burger-l3"></div>
            </div>
        </div>
    )
}

export default Menu