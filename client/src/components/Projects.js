import React from 'react'
import ProjectCard from './ProjectCard'
import useFirestore from '../hooks/useFirestore'


const Projects = () => {

    const {docs} = useFirestore('projects')
    console.log(docs)

    return (
        <>
        {docs && (
            <section className="projects">
            <h1 className="portifolio__section__header">Projects</h1>
                <div className="project_grid">
                    {docs.map(doc => {
                        return (
                            <ProjectCard project={doc} />
                        )
                    })}
                </div>
            </section>
        )}
        
        </>
    )
}

export default Projects