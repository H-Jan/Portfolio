import data from '../../data.json';
import './Contact.css'

function Contact() {
    return(
        <div>
            <h1>
                {data.About.title}
            </h1>
            <p>
                {data.About.body}
            </p>
        </div>
    )
}
export default Contact

