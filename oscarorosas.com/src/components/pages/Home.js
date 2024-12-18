import react from "react"
import { useSelector, useDispatch } from "react-redux";

const Home=()=>{
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    
    return <p>This is the Home Page for  the test2 branch! <h1>Counter: {count}</h1></p>
}

export default Home