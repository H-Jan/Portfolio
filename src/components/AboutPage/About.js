import data from '../../data.json';
import './About.css'

function About() {
    return(
        <div className="Pine">
            <h1>
                {data.About.title}
            </h1>
            <p>
                {data.About.body}
            </p>
        </div>
    )
}

export default About