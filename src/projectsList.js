import aboutProjects from './aboutProjects';
// import CSS later 
import data from './data.json'

function projectsList() {
    return(
        <div className="projectsList">
            <aboutProjects
                title="Game of Life"
                body="This is an example of Conways game of life"
                projects="Affiliated links"
            />
            <aboutProjects
                title="GANS Testing"
                body="Project Testing"
                projects="Affiliated links"
            />
            <aboutProjects
                title="Third Project Insert Testing"
                body="Part 3 Testing"
                projects="Affiliated links"
            />
        </div>
    )
}