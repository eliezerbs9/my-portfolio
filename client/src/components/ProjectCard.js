import React, {useRef, useState} from 'react'

const ProjectCard = ({project}) => {

    const [showInfo, setShowInfo] = useState(false)


    const card = useRef();

    const showCardInfo = () => {
        card.current.style.animation = "projectCardFadeIn 0.3s ease forwards"
    }

    const hideCardInfo = () => {
        card.current.style.animation="projectCardFadeOut 0.3s ease forwards"
    }

    const info = () => {
        if(!showInfo){
            //IF FALSE, SHOW INFO
            showCardInfo()
        }else{
            //IF TRUE, HIDE INFO
            hideCardInfo()
        }
        //SET STATE
        setShowInfo(!showInfo)
    }

    return (
        <>
            <div 
                className="project_card"
                onMouseEnter={() => {if(window.innerWidth > 1366)showCardInfo()}}
                onMouseLeave={() => {if(window.innerWidth > 1366)hideCardInfo()}}>
                <img 
                src={project.images[0]} 
                alt="Project"
                className="project_card__image"/>
                <div className={`project_card__info`} ref={card}>
                    <h1 className="project_card__info__header">{project.name}</h1>
                    <p className="project_card__info__body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente excepturi magnam neque, quis voluptatibus consectetur quibusdam, ad, in maxime unde? Tempore ut voluptatem quos molestiae officia, delectus illum a!</p>
                    <div className="project_card__info__footer">
                        <a href="#" className="btn btn--large"><span></span>Code</a>
                        <a href="#" className="btn btn--large">View Project</a>
                    </div>
                </div>
                <button 
                    className="btn btn--large btn--project_card"
                    onClick={info}
                >{!showInfo ? '+ More Info' : 'Hide'}</button>
            </div>
        </>
    )
}

export default ProjectCard