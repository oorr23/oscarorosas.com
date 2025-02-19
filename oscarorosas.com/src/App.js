import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import CounterSlice from "./components/counterComponent";
function App() {
  const hasSeenPopup = localStorage.getItem("hasSeenPopup");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home hasSeenPopup = {hasSeenPopup}/>} />
        <Route path="/counter" element={<CounterSlice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
