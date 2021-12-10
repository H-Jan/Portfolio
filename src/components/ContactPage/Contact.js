import data from '../../data.json';
import './Contact.css'

function Contact() {
    return(
        <div>
            <h1>
                {data.Contact.title}
            </h1>
            <p>
                {data.Contact.body}
            </p>
            <div>
                <p> {data.Contact.name1} </p>
                <a href={data.Contact.website1}><p> {data.Contact.website1} </p></a>
            </div>
            <div>
                <p> {data.Contact.name2}</p>
                <a href={data.Contact.website2}><p> {data.Contact.website2} </p></a>
            </div>


        </div>
    )
}
export default Contact

