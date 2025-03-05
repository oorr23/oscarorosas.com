import "./Cart.css"
import NavBar from "./NavBar"
import CartCards from "./CartCards"

const Cart = () => {
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
    },]
    return (
        <div> 
            <NavBar isCartPage = {true}/>
            <div className="cart-card-container">
                <CartCards cartcardsdata = {data[0]}/>
            </div>
        </div>
    )
}

export default Cart