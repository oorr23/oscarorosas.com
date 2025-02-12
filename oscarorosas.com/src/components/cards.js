import Card from "./Card"
import "./Cards.css"

const Cards = () => {
    const data = [{
        imgUrl: "https://picsum.photos/200/300",
        skill: "HTML",
        characteristics: "Funny",   
        proficiency: "Beginner",
    }, 
    {
        imgUrl: "https://picsum.photos/200/300",
        skill: "CSS",
        characteristics: "Funny",   
        proficiency: "Beginner",
    },
    {
        imgUrl: "https://picsum.photos/200/300",
        skill: "Node.js",
        characteristics: "Funny",   
        proficiency: "Beginner",
    },
    {
        imgUrl: "https://picsum.photos/200/300",
        skill: "Javascript",
        characteristics: "Funny",   
        proficiency: "Beginner",
    },
    {
        imgUrl: "https://picsum.photos/200/300",
        skill: "Javascript",
        characteristics: "Funny",   
        proficiency: "Beginner",
    },
    {
        imgUrl: "https://picsum.photos/200/300",
        skill: "Javascript",
        characteristics: "Funny",   
        proficiency: "Beginner",
    }
]
    return(<>
    <div className="cards-container">
        {data.map((item)=>{
            return(
                <Card carddata={item}/>
            )
        })
            
        }
    </div>
    </>)
}

export default Cards