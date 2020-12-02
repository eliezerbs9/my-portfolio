import React from 'react'
import GithubIcon from './icons/GithubIcon'
import EmailIcon from './icons/EmailIcon'
import LinkedinIcon from './icons/LinkedinIcon'
import useFirestore from '../hooks/useFirestore'

const Menu = () => {

    const {docs} = useFirestore('profile')
    
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
        <>
            {docs && (
                <div className="menu">
                    <img src={docs[0].photoUrl} alt="profile" className="menu__image"/>
                    <div className="menu__info">
                        <p className="menu__info__name">{docs[0].name}</p>
                        <p className="menu__info__text">{docs[0].function}</p>
                        <p className="menu__info__text">{docs[0].location}</p>
                    </div>

                    <ul className="menu__social_media">
                        <li>
                            <a href={docs[0].gitUrl}><GithubIcon/><span>Github</span></a>
                        </li>
                        <li>
                            <a href={docs[0].linkedinUrl}><LinkedinIcon /><span>LinkedIn</span></a>
                        </li>
                        <li>
                            <a href={`mailto: ${docs[0].email}`}><EmailIcon /><span>Email-me</span></a>
                        </li>
                    </ul>

                    <div className="burger" onClick={toggle}>
                        <div className="burger-l1"></div>
                        <div className="burger-l2"></div>
                        <div className="burger-l3"></div>
                    </div>
                </div>

            )}
        </>
            
            
    )
}

export default Menu