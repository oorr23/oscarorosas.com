import "./Card.css"

const Card = ({carddata}) => {
    return(<div className="card-container">
        <div className="card-image">
            <img src = {carddata.imgUrl}/>
        </div>
        <div className="card-description">
            <p>Skill: {carddata.skill}</p>
            <p>Characteristics: {carddata.characteristics}</p>
            <p>Proficiency: {carddata.proficiency}</p>
        </div>
        <div className="card-button-container"><button className="card-button-button">Click Me!</button></div>
    </div>)
}

export default Card