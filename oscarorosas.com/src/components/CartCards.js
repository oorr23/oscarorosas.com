import "./CartCards.css"

const CartCards = ({cartcardsdata}) => {
    return(
    <div className="cart-cards-container">
    <div className="cart-cards_description-container">
        <div className="cart-cards-image">
            <img src = {cartcardsdata.imgUrl}/>
        </div>

        <div className="cart-cards-description">
            <p style={{fontSize:"24px",fontWeight:"bold"}}>{cartcardsdata.skill}</p>
            <p>Characteristics: {cartcardsdata.characteristics}</p>
            <p>Proficiency: {cartcardsdata.proficiency}</p>
        </div>
    </div>
        <div className="cart-button-container"><button className="cart-button-button">Click Me!</button></div>
    </div>
    )
}

export default CartCards