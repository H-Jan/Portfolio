import data from '../data.json';
import React from 'react'



function Projects(props) {
    return(
        <div className="App">
            <h1> { data.title } </h1>
            <p> { data.body } </p>
                {data.projects.map(project => (
            <div>
                <h2> { project.title} </h2>
                <p> { project.body} </p>
                <div className="Projects-image">
                    <img src={project.images}/>
                </div>
                <a href={project.website}><p> {project.website} </p></a>
            </div>      
            ))}
        </div>
        )
    }

export default Projects