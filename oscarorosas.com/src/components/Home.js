import "./Home.css"
import NavBar from "./NavBar"
import FilterComponent from "./filterComponent"
import SearchBar from "./SearchBar"
import Cards from "./Cards"
import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

const Home=({hasSeenPopup})=>{

  const [closePressed,setIsClosePressed] = useState(false)

  //const openPopup = () => setIsPopupOpen(true);
  const closePopup = () =>setIsClosePressed(true);

  useEffect(() => {
    // Check if the pop-up has already been shown in this session
    if (!hasSeenPopup) {
      localStorage.setItem("hasSeenPopup", "true"); // Save to prevent re-showing until session ends
    }
  },);

return (
    <div>
      <NavBar />

      {(!hasSeenPopup && !closePressed)  && (
        <div className="popup-overlay">
          <div className="popup-container">
            <p className="popup-title"><h1>WELCOME!</h1><br></br></p>
            <p className="popup-paragraph">Dear viewer,<br></br><br></br>Thank you for visiting my personal site!<br></br><br></br>I built this as my first self-coded site. If you like what you see & enjoy this brief experience, please hire me. Details are in the contact section.<br></br><br></br>Enjoy!<br></br><br></br>~ Oscar O. Rosas<br></br><br></br></p>
              <div className="close-popup-button-container">
                <button onClick={closePopup} className="close-popup-button">Close</button>
              </div>
          </div>
        </div>
      )}

        <div className="main-layout">
          <div className="filter-section">
            <FilterComponent />
          </div>
          <div className ="search-cards-section">
            <SearchBar />
            <Cards />
          </div>
        </div>
    </div>
)}

export default Home