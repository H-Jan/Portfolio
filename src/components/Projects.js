import data from '../data.json';
function Projects() {
    return(
        <div className="App">
            <h1> {data.title} </h1>
            <p> {data.body} </p>
                {data.projects.map(project => (
            <div> 
                <h2> {project.title} </h2>
                <p> {project.body} </p>
            </div>      
            ))}
        </div>
        )
    }
export default Projects