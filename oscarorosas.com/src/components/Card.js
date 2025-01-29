import "./Card.css"

const Card = () => {
    const carddata = {
        imgUrl: "https://picsum.photos/200/300",
        skill: "Javascript",
        characteristics: "Funny",
        proficiency: "Beginner",
    }
    return(<div className="card-container">
        <div className="card-image">
            <img src = {carddata.imgUrl}/>
        </div>
        <div className="card-description">
            <p>Skill: {carddata.skill}</p>
            <p>Characteristics: {carddata.characteristics}</p>
            <p>Proficiency: {carddata.proficiency}</p>
        </div>
        <div className="card-button"><button>Click Me!</button></div>
    </div>)
}

export default Card