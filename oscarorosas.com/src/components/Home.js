import "./Home.css"
import NavBar from "./NavBar"
import FilterComponent from "./filterComponent"
import SearchBar from "./SearchBar"
import Cards from "./Cards"
// import { useSelector, useDispatch } from "react-redux";

const Home=()=>{
    // const count = useSelector((state) => state.counter.value);
    // const dispatch = useDispatch();
    
    return <div>
      <NavBar />
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
}

export default Home